{
	"Becoming a Mozillian": "Becoming a Mozillian",
	"Becoming a Mozilla contributor can be intimidating.  There's a lot of information to consume, and that information can be dispersed in a variety of different places.  This site aim to outline the process of becoming a Mozilla contributor, from start to finish, with gentle, short, consumable 2-10 minute videos.  Exercises are also used to solidify learnt concepts.": "Becoming a Mozilla contributor can be intimidating.  There's a lot of information to consume, and that information can be dispersed in a variety of different places.  This site aim to outline the process of becoming a Mozilla contributor, from start to finish, with gentle, short, consumable 2-10 minute videos.  Exercises are also used to solidify learnt concepts.",
	"Site Direction": "Site Direction",
	"Video Creation": "Video Creation",
	"The content on this site is produced on OS X with ScreenFlow. The videos are recorded in a local VMWare Windows 8 guest OS.  The audio is recorded with a Blue Yeti microphone.": "The content on this site is produced on OS X with ScreenFlow. The videos are recorded in a local VMWare Windows 8 guest OS.  The audio is recorded with a Blue Yeti microphone.",
	"Exercise Framework": "Exercise Framework",
	"Contributors": "Contributors",
	"This site first aims to focus on Desktop Firefox videos from the ground up.  I'd love to also do videos on Firefox for Android, Firefox for Windows 8 style UI, and for Firefox OS.": "This site first aims to focus on Desktop Firefox videos from the ground up.  I'd love to also do videos on Firefox for Android, Firefox for Windows 8 style UI, and for Firefox OS.",
	"Other exercise types other than JavaScript are still in progress.": "Other exercise types other than JavaScript are still in progress.",
	"The Ace editor is used for syntax highlighting and basic error detection.": "The Ace editor is used for syntax highlighting and basic error detection.",
	"The exercise framework is created by parsing the JavaScript source using acorn.js.  This parses the code into an abstract parse tree which is then analyzed against a whitelist and blacklist of goals powered by codecheck.js. codecheck.js allows for advanced feedback based on the program structure.": "The exercise framework is created by parsing the JavaScript source using acorn.js.  This parses the code into an abstract parse tree which is then analyzed against a whitelist and blacklist of goals powered by codecheck.js. codecheck.js allows for advanced feedback based on the program structure.",
	"Contributors of this site include:": "Contributors of this site include:",
	"Firefox OS App Basics video series:": "Firefox OS App Basics video series:",
	"Creator of this site and the Firefox Desktop content:": "Creator of this site and the Firefox Desktop content:",
	"Design, outline, QA:": "Design, outline, QA:",
	"Help with English subtitles:": "Help with English subtitles:",
	"Other contributors": "Other contributors",
	"The engineering community manager for Firefox. Please contact him if you have any questions about getting involved.": "The engineering community manager for Firefox. Please contact him if you have any questions about getting involved.",
	"Brian R. Bondy is the developer who runs this site. Brian is currently employed at Khan Academy.": "Brian R. Bondy is the developer who runs this site. Brian is currently employed at Khan Academy.",
	"Staying up to date": "Staying up to date",
	"Troubleshooting code without debugging": "Troubleshooting code without debugging",
	"Using online tools to help productivity": "Using online tools to help productivity",
	"Module ownership and reviewing code": "Module ownership and reviewing code",
	"Front end Firefox development": "Front end Firefox development",
	"Front end Firefox user interface development": "Front end Firefox user interface development",
	"App basics for Firefox OS": "App basics for Firefox OS",
	"Introduction and contributing to Mozilla": "Introduction and contributing to Mozilla",
	"More on patch files and patch queues": "More on patch files and patch queues",
	"Automation and testing": "Automation and testing",
	"Front end Firefox development tools": "Front end Firefox development tools",
	"Getting ready to work on your first bug": "Getting ready to work on your first bug",
	"Working on more bugs": "Working on more bugs",
	"Getting commit access": "Getting commit access",
	"Working on your first bug": "Working on your first bug",
	"Building Firefox": "Building Firefox",
	"Getting ready for development": "Getting ready for development",
	"Automated tests": "Automated tests",
	"Getting a review and landing your first patch": "Getting a review and landing your first patch",
	"Debugging C++ code": "Debugging C++ code",
	"Platform development": "Platform development",
	"Staying up to date on Mozilla happenings": "Staying up to date on Mozilla happenings",
	"Finding out why code is the way it is, using hg annotate": "Finding out why code is the way it is, using hg annotate",
	"Finding regression ranges with mozregression": "Finding regression ranges with mozregression",
	"Searching and referencing Firefox code": "Searching and referencing Firefox code",
	"Coding a feature from start to finish with the help of DXR": "Coding a feature from start to finish with the help of DXR",
	"Modules, owners, and peers": "Modules, owners, and peers",
	"Becoming a reviewer": "Becoming a reviewer",
	"Reviewing a patch": "Reviewing a patch",
	"Introduction to JavaScript modules (JSM)": "Introduction to JavaScript modules (JSM)",
	"Using a JavaScript module (JSM) exercise": "Using a JavaScript module (JSM) exercise",
	"Import the module: 'resource://gre/modules/osfile.jsm'": "Import the module: 'resource://gre/modules/osfile.jsm'",
	"Use Components.utils.import to import the osfile.jsm module": "Use Components.utils.import to import the osfile.jsm module",
	"The osfile.jsm path is: resource://gre/modules/osfile.jsm": "The osfile.jsm path is: resource://gre/modules/osfile.jsm",
	"Your code should look like this: Components.utils.import('resource://gre/modules/osfile.jsm');": "Your code should look like this: Components.utils.import('resource://gre/modules/osfile.jsm');",
	"Create a promise using the OS.File.read API for the file topsecret.txt": "Create a promise using the OS.File.read API for the file topsecret.txt",
	"Just call OS.File.read to create the promise and store it in a variable named anything you'd like": "Just call OS.File.read to create the promise and store it in a variable named anything you'd like",
	"Just pass a single parameter to OS.File.read for now": "Just pass a single parameter to OS.File.read for now",
	"Your code should look like this: var promise = OS.File.read('topsecret.txt');": "Your code should look like this: var promise = OS.File.read('topsecret.txt');",
	"Call then() on the promise, passing in a callback function directly which takes one parameter": "Call then() on the promise, passing in a callback function directly which takes one parameter",
	"Your code should look like this: promise.then(function(data) { });": "Your code should look like this: promise.then(function(data) { });",
	"Create a new TextDecoder instance inside the callback, and call its decode method, passing in the callback's read data.": "Create a new TextDecoder instance inside the callback, and call its decode method, passing in the callback's read data.",
	"Creating a new text decoder looks like this var decoder = new TextDecoder();": "Creating a new text decoder looks like this var decoder = new TextDecoder();",
	"Decoding the text should look like this decoder.decode(data)": "Decoding the text should look like this decoder.decode(data)",
	"Your code should look like this: promise = OS.File.read('topsecret.txt'); promise.then(function(data) { var decoder = new TextDecoder();  decoder.decode(data); } ": "Your code should look like this: promise = OS.File.read('topsecret.txt'); promise.then(function(data) { var decoder = new TextDecoder();  decoder.decode(data); } ",
	"Introduction to XPCOM and using your first XPCOM component": "Introduction to XPCOM and using your first XPCOM component",
	"Using an XPCOM object exercise": "Using an XPCOM object exercise",
	"Initialize a variable to an instance of a filepicker XPCOM object with the interface nsIFilePicker": "Initialize a variable to an instance of a filepicker XPCOM object with the interface nsIFilePicker",
	"Use var picker = Components.classes['@mozilla.org/filepicker;1']'s createInstance method": "Use var picker = Components.classes['@mozilla.org/filepicker;1']'s createInstance method",
	"pass in an interface of Components.interfaces.nsIFilePicker": "pass in an interface of Components.interfaces.nsIFilePicker",
	"Your code should look like this: var picker = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);": "Your code should look like this: var picker = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);",
	"Call the init method on the file picker instance in open mode, for the third parameter pass in Components.interfaces.nsIFilePicker.modeOpen for open mode": "Call the init method on the file picker instance in open mode, for the third parameter pass in Components.interfaces.nsIFilePicker.modeOpen for open mode",
	"Pass in anything for the first 2 parameters": "Pass in anything for the first 2 parameters",
	"For the third parameter to init, pass in Components.interfaces.nsIFilePicker.modeOpen for open mode": "For the third parameter to init, pass in Components.interfaces.nsIFilePicker.modeOpen for open mode",
	"Your code should look like this: var picker = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker); picker.init(x, y, Components.interfaces.nsIFilePicker.modeOpen);": "Your code should look like this: var picker = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker); picker.init(x, y, Components.interfaces.nsIFilePicker.modeOpen);",
	"Call the open method on the file picker instance, directly passing in a callback function with 1 parameter": "Call the open method on the file picker instance, directly passing in a callback function with 1 parameter",
	"Your code should look like this: picker.open(function(result) { });": "Your code should look like this: picker.open(function(result) { });",
	"Use console.log to print out the instance's file path member": "Use console.log to print out the instance's file path member",
	"The instance is picker.file.path": "The instance is picker.file.path",
	"Your code should look like this: picker.open(function(result) { console.log(picker.file.path); });": "Your code should look like this: picker.open(function(result) { console.log(picker.file.path); });",
	"Creating a JavaScript module (JSM)": "Creating a JavaScript module (JSM)",
	"Writing a JavaScript module exercise": "Writing a JavaScript module exercise",
	"Writing JavaScript XPCOM objects": "Writing JavaScript XPCOM objects",
	"Writing a JavaScript XPCOM object exercise": "Writing a JavaScript XPCOM object exercise",
	"Introduction to XUL": "Introduction to XUL",
	"Introduction to XBL": "Introduction to XBL",
	"Creating a simple XUL window exercise": "Creating a simple XUL window exercise",
	"Intro and hello": "Intro and hello",
	"What makes a good HTML5 App ": "What makes a good HTML5 App ",
	"The app manifest": "The app manifest",
	"The app manager": "The app manager",
	"Testing on real devices": "Testing on real devices",
	"Publishing to marketplace": "Publishing to marketplace",
	"Web APIs": "Web APIs",
	"Web Activities": "Web Activities",
	"Push Notifications": "Push Notifications",
	"Offline functionality": "Offline functionality",
	"Where to find more": "Where to find more",
	"Introduction to Mozilla and Code Firefox": "Introduction to Mozilla and Code Firefox",
	"Marketing your contributions": "Marketing your contributions",
	"Introduction to Code Firefox exercises": "Introduction to Code Firefox exercises",
	"Exercises are a great way to practice what you've learnt. \nThis exercise is just to get you started with the framework.": "Exercises are a great way to practice what you've learnt. \nThis exercise is just to get you started with the framework.",
	"Do not have any empty statements": "Do not have any empty statements",
	"An extra semicolon can lead to an empty statement": "An extra semicolon can lead to an empty statement",
	"Create a new variable declaration and initialize it with a value in one statement": "Create a new variable declaration and initialize it with a value in one statement",
	"Use var to declare a variable": "Use var to declare a variable",
	"You should set a value equal to the variable you create with var": "You should set a value equal to the variable you create with var",
	"var x = 3": "var x = 3",
	"Use the increment operator on a variable named age within the body of an if statement": "Use the increment operator on a variable named age within the body of an if statement",
	"The increment operator is ++": "The increment operator is ++",
	"Inrementing a variable should look like age++": "Inrementing a variable should look like age++",
	"Your code should look something like this: if (x) { age++; }": "Your code should look something like this: if (x) { age++; }",
	"Use a break statement inside a for..in loop": "Use a break statement inside a for..in loop",
	"A break statement looks like this: break;": "A break statement looks like this: break;",
	"A for..in statement looks like this: for (x in y) { }": "A for..in statement looks like this: for (x in y) { }",
	"Your code should look like this: for (x in y) { break; } ": "Your code should look like this: for (x in y) { break; } ",
	"Make an assignment within 2 nested if statements": "Make an assignment within 2 nested if statements",
	"A nested if statement looks like if (x) { if (y) { } }": "A nested if statement looks like if (x) { if (y) { } }",
	"An assignment looks like this: x = 3;": "An assignment looks like this: x = 3;",
	"Your code should look like this:  if (x) { if (y) { z = 3; } } ": "Your code should look like this:  if (x) { if (y) { z = 3; } } ",
	"Splitting up a patch file with hg and excluding files": "Splitting up a patch file with hg and excluding files",
	"Moving and folding patches in your patch queue": "Moving and folding patches in your patch queue",
	"Hacking on a patch file manually": "Hacking on a patch file manually",
	"Hacking on your patch queue internals": "Hacking on your patch queue internals",
	"Pushing to Gaia (on github) ends up running code in TBPL": "Pushing to Gaia (on github) ends up running code in TBPL",
	"TBPL tests and how to read them specific to Firefox OS": "TBPL tests and how to read them specific to Firefox OS",
	"How to use gaia-try to see results": "How to use gaia-try to see results",
	"Understanding intermittent test failures": "Understanding intermittent test failures",
	"Introduction to the Firefox Scratchpad": "Introduction to the Firefox Scratchpad",
	"Introduction to the DOM Inspector": "Introduction to the DOM Inspector",
	"Mastering the Console for front end development": "Mastering the Console for front end development",
	"Debugging front end Firefox code with the built-in debugger": "Debugging front end Firefox code with the built-in debugger",
	"Profiling": "Profiling",
	"Creating a Bugzilla account, account settings, and permissions": "Creating a Bugzilla account, account settings, and permissions",
	"Finding a first Firefox bug to work on": "Finding a first Firefox bug to work on",
	"Posting a well written bug to Bugzilla": "Posting a well written bug to Bugzilla",
	"Getting assigned to a bug and gaining edit bugs permissions": "Getting assigned to a bug and gaining edit bugs permissions",
	"Validating you are assigned to a bugzilla bug": "Validating you are assigned to a bugzilla bug",
	"Introduction to Mercurial Patch Queues": "Introduction to Mercurial Patch Queues",
	"Working on multiple patches within your patch queue": "Working on multiple patches within your patch queue",
	"Pulling down remote changes to your cloned repository": "Pulling down remote changes to your cloned repository",
	"Manually rebasing a patch that has conflicts": "Manually rebasing a patch that has conflicts",
	"Importing a patch from Bugzilla and removing old patches": "Importing a patch from Bugzilla and removing old patches",
	"Workflow when developing with patches": "Workflow when developing with patches",
	"Patch queue exercise": "Patch queue exercise",
	"Getting commit access level 1": "Getting commit access level 1",
	"Getting commit access level 3": "Getting commit access level 3",
	"Explanation of the Firefox source tree": "Explanation of the Firefox source tree",
	"Setting up mercurial": "Setting up mercurial",
	"Creating a patch file": "Creating a patch file",
	"Making changes to that patch file": "Making changes to that patch file",
	"Create a patch file exercise": "Create a patch file exercise",
	"Introduction to mach and mach setup": "Introduction to mach and mach setup",
	"Building Desktop Firefox from the source code": "Building Desktop Firefox from the source code",
	"Incremental builds and making changes": "Incremental builds and making changes",
	"See some important changes needed in the comments": "See some important changes needed in the comments",
	"Adding options with a .mozconfig file and debug builds": "Adding options with a .mozconfig file and debug builds",
	"Using more than one .mozconfig file": "Using more than one .mozconfig file",
	"Creating a .mozconfig file exercise": "Creating a .mozconfig file exercise",
	"Setting up a Windows Firefox build environment": "Setting up a Windows Firefox build environment",
	"Setting up an OS X Firefox build environment": "Setting up an OS X Firefox build environment",
	"Setting up a Linux Firefox build environment": "Setting up a Linux Firefox build environment",
	"The different types of Firefox channels and repositories": "The different types of Firefox channels and repositories",
	"Getting the Firefox source code": "Getting the Firefox source code",
	"Getting help on IRC": "Getting help on IRC",
	"Registering yourself as a Mozillian at mozillians.org": "Registering yourself as a Mozillian at mozillians.org",
	"Introduction to the automated tests that run on each push": "Introduction to the automated tests that run on each push",
	"Try server, Buildbot, and TBPL": "Try server, Buildbot, and TBPL",
	"TryChooser syntax and pushing to try": "TryChooser syntax and pushing to try",
	"Running buildbot tests locally": "Running buildbot tests locally",
	"Introduction to the XPCShell and XPCShell tests": "Introduction to the XPCShell and XPCShell tests",
	"Basics of creating an XPCShell test": "Basics of creating an XPCShell test",
	"Creating a basic mochitest": "Creating a basic mochitest",
	"Introduction to reftests": "Introduction to reftests",
	"Basics of creating a reftest": "Basics of creating a reftest",
	"Creating a basic browser chrome test": "Creating a basic browser chrome test",
	"Attaching a patch to Bugzilla and getting your first review": "Attaching a patch to Bugzilla and getting your first review",
	"Review results, integration branches, and landing your patch": "Review results, integration branches, and landing your patch",
	"Debugging your local build with Visual Studio": "Debugging your local build with Visual Studio",
	"Introduction to different debugger windows in Visual Studio": "Introduction to different debugger windows in Visual Studio",
	"More advanced debugging tricks with Visual Studio": "More advanced debugging tricks with Visual Studio",
	"Debugging your local build in OS X with Xcode": "Debugging your local build in OS X with Xcode",
	"Debugging your local builds in Linux with gdb and ddd": "Debugging your local builds in Linux with gdb and ddd",
	"Creating C++ XPCOM components": "Creating C++ XPCOM components",
	"Initialize data": "Initialize data",
	"Reads data from videos.json and puts it into the redis DB.": "Reads data from videos.json and puts it into the redis DB.",
	"Also re-initializes all controllers": "Also re-initializes all controllers",
	"Server Statistics": "Server Statistics",
	"Last server instance reset: ": "Last server instance reset: ",
	" ago": " ago",
	"User Statistics": "User Statistics",
	"These statistics are only tracked for logged on users": "These statistics are only tracked for logged on users",
	"User count: ": "User count: ",
	"Lessons Completed: ": "Lessons Completed: ",
	"Completed per user: ": "Completed per user: ",
	"Linked Bugzilla accounts: ": "Linked Bugzilla accounts: ",
	"Display names filled: ": "Display names filled: ",
	"Websites filled: ": "Websites filled: ",
	"Days since last joined: ": "Days since last joined: ",
	"Lessons completed by user": "Lessons completed by user",
	" completed": " completed",
	"Lessons completed by lesson": "Lessons completed by lesson",
	"Perform the following tasks in JavaScript:": "Perform the following tasks in JavaScript:",
	"Not yet completed": "Not yet completed",
	"So far so good.": "So far so good.",
	"Do not have any syntax errors.": "Do not have any syntax errors.",
<<<<<<< HEAD
	"Desktop automation and testing": "Desktop automation and testing",
	"Installing a Telemetry Experiment ": "Installing a Telemetry Experiment ",
	"Firefox OS automation and testing": "Firefox OS automation and testing"
}
=======
	"Cheatsheet": "Cheatsheet",
	"In Development": "In Development",
	"Videos": "Videos",
	"You are not authorized to see this page": "You are not authorized to see this page"
}
>>>>>>> bf08ee362e6380fada6aa49e7de33b5d44e99012