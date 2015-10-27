/**
 * Created by RoxanneLandry on 15-10-27.
 */
/**
 * Created by RoxanneLandry on 15-10-26.
 */
define([
    '../libs/jquery/jquery-2.1.4',
    'bootstrap',
    'slick',
    'presentation',
    'underscore',
    'backbone',
    'text!templates/mainPage.html'
], function($, _bootstrap, slick, presentation,  _, Backbone, mainPageTemplate){
    var MainPageView = Backbone.View.extend({
        el: $(".content"),
        initialize: function(){
            var compiledTemplate = _.template(mainPageTemplate);
            this.$el.html(compiledTemplate);
        }
    });
    return MainPageView;
});