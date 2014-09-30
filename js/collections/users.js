define([
    'backbone',
    'models/user'
], function (Backbone, UserModel) {

    $.ajaxPrefilter( function(options, originalOptions, jqXHr) {
        options.url = 'http://api.laravelcommerce.local/v1' + options.url;
    });

    var UserCollection = Backbone.Collection.extend({
        url: '/users',
        model: UserModel
    });

    return UserCollection;
});
