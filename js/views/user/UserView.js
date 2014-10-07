define([
  'underscore',
  'backbone',
  'models/user',
  'text!templates/user/view.html'
], function (_, Backbone, UserModel, UserViewTemplate) {
    
  var UserView = Backbone.View.extend({
    el: '#content',

    initialize: function() {
        // var users = new UserCollection();
    },

    render: function () {
      var that = this;
      var user = new UserModel({id: 1});
      
      user.fetch({
        success: function() {
          alert(user.toJSON());
        }
      });
      
//      var users = new UserCollection();
//
//      users.fetch({
//        success: function () {
//          var data = {
//              users: users.models,
//              _: _
//          };
//
//          var template = _.template( UserViewTemplate, data );
//          that.$el.html(template);
//        }
//      });
    }
  });

  return UserView;
});
