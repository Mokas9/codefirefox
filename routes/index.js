"use strict";

var db = require('../db'),
  querystring = require("querystring"),
  acorn = require('acorn'),
  prettyjson = require('prettyjson'),
  Promise = require('promise'),
  CodeCheck = require('codecheckjs'),
  helpers = require('../helpers');

/**
 * GET /cheatsheet
 * Renders the cheat sheet page
*/
exports.cheatsheet = function(req, res, next) {
  res.render('cheatsheet', { pageTitle: 'Cheatsheet',
                             bodyID: 'body_cheatsheet',
                             mainTitle: 'Cheatsheet'
                           });
};

/**
 * GET /initVideoData
 * Reads data from videos.json and loads it into redis.
 * Renders the initVideoData page
*/
exports.initVideoData = function(req, res) {
  var loadVideos = Promise.denodeify(exports.loadVideos).bind(exports);
  db.initVideoDataPromise(__dirname + '/../data/videos.json').then(function() {
    return loadVideos();
  }).done(function() {
    res.render('simpleStatus', { pageTitle: 'Data initialized',
                               status: "Data initialized successfully",
                               bodyID: 'body_simplestatus',
                               mainTitle: 'Data Initialized'
                             });
  });
};

/**
 * TODO: Move to Video controller
*/
exports.loadVideos = function(c) {
  db.getAllPromise("category").done(function onSuccess(cat) {
    exports.categories  = cat;
    c();
  }, function onFailure(err) {
    c(err);
  });
};

/**
 * GET /admin
 * Renders the adminstration page
 * You don't need to be logged in to view this page, mainly because
 * there is nothing scary you can do here yet. It'll probably be locked down
 * at some point later on though.
 */
exports.admin = function(req, res) {
  res.render('admin', { pageTitle: 'Administration',
                        bodyID: 'body_admin',
                        mainTitle: 'Administration'
                      });
};

/**
 * GET /about
 * Renders the about page
 */
exports.about = function(req, res) {
  res.render('about', { pageTitle: 'About',
                        bodyID: 'body_about',
                        mainTitle: 'About'
                      });
};

/**
 * GET /stats
 * Renders the statistics page.
 * This page is only available if you are lgoged in.
 * If you are an administrator then this page will display exra information.
 */
exports.stats = function(req, res, next) {
  if (!res.locals.session.email) {
    res.render('notFound', { pageTitle: 'Not authenticated',
                             bodyID: 'body_stats',
                             mainTitle: 'Not authenticated'
                           });
    return;
  } 

  var info, videoSlugsWatched;
  db.getOnePromise('user:' + res.locals.session.email + ':info')
  .then(function(info1) {
    info = info1;
    return db.getSetElementsPromise('user:' + res.locals.session.email + ':video_slugs_watched');
  }).then(function(videoSlugsWatched1) {
    videoSlugsWatched = videoSlugsWatched1;
    return db.getOnePromise('user:' + res.locals.session.email + ':login_count');
  }).done(function onSuccess(loginCount) {
    info.dateJoined = helpers.formatTimeSpan(new Date(info.dateJoined), new Date());
    info.dateLastLogin = helpers.formatTimeSpan(new Date(info.dateLastLogin), new Date());
    var serverRunningSince = helpers.formatTimeSpan(res.locals.session.serverRunningSince, new Date(), true);
    res.render('stats', { videoSlugsWatched: videoSlugsWatched,
                          serverRunningSince: serverRunningSince,
                          loginCount: loginCount || 0,
                          info: info,
                          categories: exports.categories,
                          pageTitle: 'Stats',
                          bodyID: 'body_stats',
                          mainTitle: 'Stats'});
  }, function onFailure() {
    res.render('notFound', { pageTitle: 'No data found',
                             bodyID: 'body_stats',
                             mainTitle: 'No data found'
                           });
  });
};

/**
 * DELETE /stats
 * Deletes all user stats.
 * This oepration will only succeed if you are logged in, and you are an admin.
 */ 
exports.delStats = function(req, res, next) {
  if (!res.locals.session.email) {
    res.json({ status: "failure",
               reason: "not logged in"});
    return;
  }
  if (!res.locals.session.isAdmin) {
    res.json({ status: "failure",
               reason: "not admin"});
    return;
  }
  db.delUserStats(res.locals.session.email, function(err, result) {
    res.json({ status: "okay" });
  });
};

// TODO: Move to user controller
function reportCompleted(req, res, callback) {
  db.getOnePromise("video:" + req.params.slug, function(err, lesson) {
    if (!err) {
      db.addToSet('user:' + res.locals.session.email + ':video_slugs_watched', lesson.slug)
    } 
    if (callback) {
      callback(err);
    }
  });
}

/**
 * GET /tags
 * Renders the tag page
 */
exports.tags = function(req, res) {
  db.getOnePromise("tags:all").done(function onSuccess(tags) {
    res.render('tags', { pageTitle: 'Tags',
                         bodyID: 'body_tags',
                         mainTitle: 'Tags',
                         tags: tags
                       });
  }, function onFailure(err) {
    res.render('notFound', { pageTitle: 'Tags',
                             bodyID: 'body_tags',
                             mainTitle: 'Tags not found'
                           });
  });
};

/**
 * POST /video/:slug
 * POST /exercise/:slug
 * Sets per logged in user stats
 *
 * TODO: Should return an error if the user is not logged in, currently
 * will store it as a key with null instead of the username.
 */ 
exports.completedLesson = function(req, res, next) {
  if (!req.params.slug) {
    next(new Error('Invalid URL format, should be: video/:slug or exercise/:slug'));
    return;
  }

  if (!res.locals.session.email) {
    res.json({ status:  "failure", reaosn: 'Not logged in' });
    return;
  }

  reportCompleted(req, res, function(err) {
    res.json({ status: (err ? "failure" : "okay") });
  });

};

/**
 * GET /:category/:video
 * Renders the specified video page
 */
exports.video = function(req, res, next) {
  if (!req.params.video) {
    next(new Error('Invalid URL format, should be: :category/:video or video/:video'));
    return;
  }

  var useAmara = req.cookies.useAmara == '1';
  console.log('use amara cookie is: ' + req.cookies.useAmara);
  db.getOnePromise("video:" + req.params.video, function(err, video) {
    if (err) {
      res.render('notFound', { pageTitle: 'Video',
                               bodyID: 'body_not_found',
                               mainTitle: 'Video not found'
                             });
      return;
    }

    video.shareUrl = "http://twitter.com/home?status=" + encodeURIComponent(video.title + " " + req.protocol + "://" + req.get('host') + req.url + " @codefirefox")
    res.render('video', { pageTitle: video.title,
                          video: video,
                          bodyID: 'body_video',
                          mainTitle: 'Video',
                          videoSlug: req.params.video,
                          useAmara: useAmara
                        });
  });
};

/**
 * GET /
 * Renders the main page which shows a list of videos
 * TODO: make GET /videos only show videos, currently just goes here
 * TODO: make GET /exercises only show exercises, currently just goes here
 */
exports.outline = function(req, res) {
  var userStats, userVideoSlugsWatched;
  var getVideosWatchedIfLoggedIn = db.emptyPromise();
  if (res.locals.session.email)
    getVideosWatchedIfLoggedIn  = db.getSetElementsPromise('user:' + res.locals.session.email + ':video_slugs_watched');

  getVideosWatchedIfLoggedIn.then(function(videoSlugsWatched) {
    userVideoSlugsWatched = videoSlugsWatched || [];
    return db.getOnePromise("stats:video");
  }).done(function(stats) {
    userStats = JSON.parse(stats);
    exports.categories.sort(db.sortByPriority);
    res.render('index', { pageTitle: 'Lessons',
                          categories: exports.categories, bodyID: 'body_index',
                          mainTitle: 'Lessons',
                          videoSlugsWatched: userVideoSlugsWatched,
                          tagged: req.params.tagged,
                          stats: userStats
    });
  }, function onFailure(err) {
    res.render('notFound', { pageTitle: 'Video',
                             bodyID: 'body_not_found',
                             mainTitle: 'Video not found'
                           });
  });
};

/**
 * GET /exercise
 * Renders the exercise demo page
 */ 
exports.exerciseDemo = function(req, res) {
  res.redirect('/exercise/intro-exercise');
}

/**
 * GET /exercise/:exercise
 * Renders the specified video page
 */
exports.exercise = function(req, res, next) {
  if (!req.params.exercise) {
    next(new Error('Invalid URL format, should be: exercise/:exercise'));
    return;
  }

  db.getOnePromise("video:" + req.params.exercise, function(err, exercise) {
    if (err) {
      res.render('notFound', { pageTitle: 'Exercise',
                               bodyID: 'body_not_found',
                               mainTitle: 'Exercise not found'
                             });
      return;
    }

    var jsonpCallback = req.query.jsonp;
    if (jsonpCallback) {
      var assertions = JSON.stringify(exercise.assertions);
      assertions = assertions.replace(/'/g, "\\'");
      var assertions = jsonpCallback + "('" + assertions + "');"
        res.writeHead(200, {
            'Content-Type': 'application/javascript',
            'Content-Length': assertions.length
        });
        res.end(assertions);
        return;
    }

    res.render('exercise', { pageTitle: exercise.title,
                             bodyID: 'body_exercise',
                             mainTitle: 'Exercise',
                             exercise: exercise,
                             assertions: exercise.assertions
                           });
  });
};


/**
 * POST /check-code/:exercise
 * Checks the POST'ed code to see if it matches a set of assertions
*/
exports.checkCode = function(req, res) {
  console.log('POST /check-code');
  if (!req.params.slug) {
    res.json({ status: "failure",
               reason: "Exercise slug must be specified",
             });
    return;
  }

  db.getOnePromise("video:" + req.params.slug, function(err, exercise) {
    var checker = new CodeCheck();
    checker.addAssertions(exercise.assertions);
    try {
      checker.parseSample(req.body.code, function(err, ret) {
        var statusMessage = "okay";
        var reason = "";
        if (err) {
          console.log(err);
          statusMessage = "failure";
          reason = err;
        } else {
          if (checker.allSatisfied) {
            reportCompleted(req, res);
          }
        }

        res.json({ status: statusMessage,
                   reason: reason,
                   assertions: checker.assertions,
                   allSatisfied: checker.allSatisfied
                 });

      });
    } catch (e) {
      console.log(e);
      res.json({ status: "failure",
                 reason: e
               });
    }
  });
};

