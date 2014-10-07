define([
  'underscore',
  'backbone',
  'collections/users',
  'text!templates/user/list.html'
], function (_, Backbone, UserCollection, UserListTemplate) {
    
  var UserListView = Backbone.View.extend({
    el: '#content',

    initialize: function() {
        // var users = new UserCollection();
    },

    render: function () {
      var that = this;
      var users = new UserCollection();

      users.fetch({
        success: function () {
          var data = {
              users: users.models,
              _: _
          };

          var template = _.template( UserListTemplate, data );
          that.$el.html(template);
        }
      });
    }
  });

  return UserListView;
});
