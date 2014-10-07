// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/user/list',
  'views/layout/home'
], function($, _, Backbone, UserListView, HomeView) {
    
  var AppRouter = Backbone.Router.extend({
    routes: {
      'user': 'user',
      '': 'home',
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function() {
    var app_router = new AppRouter;

    app_router.on('route:user', function() {
      var userListView = new UserListView();
      userListView.render();
    });

    app_router.on('route:home', function() {
      var homeView = new HomeView();
      homeView.render();
    });

    app_router.on('defaultAction', function(actions) {
      console.log('No route:', actions);
    });

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
