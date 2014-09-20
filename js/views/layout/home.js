define([
    'underscore',
    'backbone',
    'text!templates/layout/home.html',
], function (_, Backbone, HomeTemplate) {
    
    var HomeView = Backbone.View.extend({
        el: '#content',
                
        initialize: function() {
            //
        },
        
        render: function () {
            var template = _.template( HomeTemplate );
            this.$el.html(template);
        }
    });
    
    return HomeView;
});
