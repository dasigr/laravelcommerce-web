// Filename: models/user

define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var UserModel = Backbone.Model.extend({
        urlRoot: '/user',
        defaults: {
            name: '',
            email: '',
            password: ''
        },
        
        runFetch: function() {
            var thisObj = this;
            
            this.fetch({
                success: function(model, response, options) {
                    console.log('success: UserModel.fetch');
                },
                error: function() {
                    console.log('error: UserModel.fetch');
                }
            });
        }
    });
    
    return UserModel;
});