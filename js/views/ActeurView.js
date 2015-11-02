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
    'models/Actor',
    'text!templates/actor.html'

], function($, _bootstrap, slick, presentation,  _, Backbone, ActorModel, actorTemplate){
    var ActorView = Backbone.View.extend({
        template : _.template(actorTemplate),
        el: '.content',
        initialize:function(){


            var actorInfo = new ActorModel();
            var data = actorInfo.fetch({
                success: function(actorInfo){

                },
                error: function(){

                }
            });

        },
        render: function() {
            var html = this.template({actor: actorInfo.toJSON()});
            this.$el.html(html);
            return this;
        }
    });
    return ActorView;
});