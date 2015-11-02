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
    'presentation',
    'underscore',
    'backbone',
    'collections/Actors',
    'text!templates/actor.html'

], function($, _bootstrap, presentation,  _, Backbone, ActorCollection, actorTemplate){
    var ActorView = Backbone.View.extend({
        template: _.template(actorTemplate),

        el: $(".content"),
        initialize: function(){
            _.bindAll(this,'render');
            var that = this;
            this.collection = new ActorCollection();

            this.collection.fetch({
                success: function(){
                    console.log('fetched');
                },
                error: function(){
                }

            });
            this.collection.bind('sync destroy save', function () {
                that.render();
            });
        },
        render: function() {

            this.$el.html(this.template({actorInfo: this.collection.toJSON()}));
        }
    });


    return ActorView;
});