// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        
        // Require.js plugins
        text: 'libs/require/text',

        // Just a short cut so we can put our html outside the js dir
        // When you have HTML/CSS designers this aids in keeping them out of the js directory
        templates: '../templates',
        
        // Twitter Bootstrap
        tw_bootstrap: 'libs/bootstrap/bootstrap'
    }

});

require([
    // Load our app module and pass it to our definition function
    'app'
], function(App) {
    // The "app" dependency is passed in as "App"
    App.initialize();
});
