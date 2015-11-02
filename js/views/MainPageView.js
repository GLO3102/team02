/**
 * Created by RoxanneLandry on 15-10-27.
 */

define([
    'jquery',
    'bootstrap',
    'owl',
    'underscore',
    'backbone',
    'owlPresentation',
    'text!templates/mainPage.html'
], function($, _bootstrap, _owl,  _, Backbone,owlPresentation, mainPageTemplate){
    var MainPageView = Backbone.View.extend({
        el: $(".content"),
        initialize: function(){
            var compiledTemplate = _.template(mainPageTemplate);
            this.$el.html(compiledTemplate);
        }
    });
    return MainPageView;
});