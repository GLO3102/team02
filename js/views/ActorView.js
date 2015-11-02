/**
 * Created by RoxanneLandry on 15-11-01.
 */
/**
 * Created by Maxime on 2015-10-30.
 */
/**
 * Created by Maxime on 2015-10-30.
 */
define([
    'jquery',
    'bootstrap',
    'underscore',
    'backbone',
    'models/Actor',
    'text!templates/actor.html'

], function($, _bootstrap,  _, Backbone, Actor, actorTemplate){
    var ActorView = Backbone.View.extend({
        template: _.template(actorTemplate),

        el: $(".content"),
        initialize: function(){
            this.acteurInfo = new Actor();

            this.acteurInfo.fetch({
                success: function(acteurInfo){
                },
                error: function(){
                }

            });

        },
        render: function() {
            this.$el.html(this.template({actorInfo: this.acteurInfo.toJSON()}));
        }
    });


    return ActorView;
});