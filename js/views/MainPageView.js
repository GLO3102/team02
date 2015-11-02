/**
 * Created by RoxanneLandry on 15-10-27.
 */

define([
    'jquery',
    'bootstrap',
    'slick',
    'underscore',
    'backbone',
    'text!templates/mainPage.html'
], function($, _bootstrap,slick, _, Backbone, mainPageTemplate){
    var MainPageView = Backbone.View.extend({
        el: $(".content"),
        initialize: function(){
            var compiledTemplate = _.template(mainPageTemplate);
            this.$el.html(compiledTemplate);
        }
    });
    return MainPageView;
});