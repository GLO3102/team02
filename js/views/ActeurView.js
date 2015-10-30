/**
 * Created by Maxime on 2015-10-30.
 */
/**
 * Created by Maxime on 2015-10-30.
 */
define([
    'jquery',
    'bootstrap',
    'slick',
    'presentation',
    'underscore',
    'backbone',
    'text!templates/actor.html'
], function($, _bootstrap, slick, presentation,  _, Backbone, actorTemplate, Actor){
    var ActorView = Backbone.View.extend({
        el: $(".content"),
        initialize: function(){
            var compiledTemplate = _.template(actorTemplate);
            this.$el.html(compiledTemplate);
        }
    });


    return ActorView;
});