require.config({
  baseUrl: '/static/js/build/',
   shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    }
  },
  paths: {
    'jquery': 'http://code.jquery.com/jquery-1.11.0.min',
    'underscore': 'underscore-min',
    'acorn': 'acorn',
    'codecheck': 'codecheck',
    'analytics': 'analytics',
    'persona': 'https://login.persona.org/include',
    'react': 'react',
    //'react': 'http://fb.me/react-0.8.0',
    'showdown': 'http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min',

    'video': 'video',
    'gravatar': 'gravatar',
    'comment': 'comment',

    'ace': 'ace/ace.js',
    'exercise': 'video',

    'backbone': 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min',

    'models': 'models',
    'tabzilla': 'http://mozorg.cdn.mozilla.net/tabzilla/tabzilla'
  }
});

require(['analytics', 'jquery', 'underscore', 'persona', 'tabzilla'], function(analytics, $) {
  $(document.links).filter(function() {
      return this.hostname != window.location.hostname;
  }).attr('target', '_blank');

  /* Persona/Browser ID stuff */

  $('#login').click(function() {
    navigator.id.request();
  });

  $('#logout').click(function() {
    $.ajax({
      url: '/persona/logout',
      type: 'POST',
      success: function(response) {
        if (location.pathname.substring(0, 8) != '/profile' && 
            location.pathname.substring(0, 6) != '/admin') {
          location.reload(); 
        } else {
          location.href = '/';
        }
      }
    });
    navigator.id.logout();
  });

  $('#del-profile').click(function() {
    if (!confirm('Are you sure you want to completely nuke all of your user data?')) {
      return;
    }

    $.ajax({
      url: '/profile',
      type: 'DELETE',
      contentType: 'application/json',
      dataType: 'json',
      success: function(response) {
        if (response.status === 'okay') {
          $('#logout').click();
        }
      }
    });
  });

  $('#subtitles').click(function() {
    document.cookie = "useAmara=1";
    location.reload();
  });

  $('#no-subtitles').click(function() {
    document.cookie = "useAmara=0";
    location.reload();
  });

  $('#boxclose').click(function(){
    $('#notify-bar').slideUp();
  });

  $(function() {
    // By default, express-persona adds the users email address to req.session.email when their email is validated.
    navigator.id.watch({
      onlogin: function(assertion) {
        // Check for already logged in
        if (email) {
          return;
        }
        $.ajax({
          url: '/persona/verify',
          type: 'POST',
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify({assertion: assertion}),
          success: function(response) {
            if (response.status === 'okay') {
              location.reload(); 
            }
          }
        });
      },

      onlogout: function() {
        // For some reason we're getting onlogout calls when we shouldn't.
        // To avoid this I put the actual xhr calls inside the logout button
        // handler.
        if (!email) {
          console.log('persona calling onlogout with known email');
        } else {
          console.log('persona calling onlogout with unknown email');
        }
      }
    });
  });
});
