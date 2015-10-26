/**
 * Created by RoxanneLandry on 15-10-26.
 */
define([
    '../libs/jquery/jquery-2.1.4.js',
    'underscore',
    'backbone',
    'text!templates/mainPage.html'
], function($, _, Backbone, mainPageTemplate){
    var MainPageView = Backbone.View.extend({
        el: $("#container"),
        initialize: function(){
            var compiledTemplate = _.template(mainPageTemplate);
            this.$el.html(compiledTemplate);
        }
    });
    // Returning instantiated views can be quite useful for having "state"
    return MainPageView;
});