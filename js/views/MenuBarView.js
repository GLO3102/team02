/**
 * Created by RoxanneLandry on 15-10-26.
 */

define([
    'jquery',
    'bootstrap',
    'presentation',
    'underscore',
    'backbone',
    'text!templates/menuBar.html'
], function($, _bootstrap, presentation, _, Backbone, menuBarTemplate){
    var MenuBarView = Backbone.View.extend({
        el: $(".menuBar"),
        initialize: function(){
            var compiledTemplate = _.template(menuBarTemplate);
            this.$el.html(compiledTemplate);
        }
    });
    return MenuBarView;
});