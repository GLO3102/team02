/**
 * Created by Marina on 2015-11-01.
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

], function($, _bootstrap, slick, presentation,  _, Backbone, TvShow, tvShowTemplate){
    var TvShowView = Backbone.View.extend({
        template: _.template(tvShowTemplate),

        el: $(".content"),
        initialize: function(){
            this.tvShowInfo = new TvShow();

            this.tvShowInfo.fetch({
                success: function(tvShowInfo){
                    alert("yo");
                    alert(tvShowInfo.toJSON);
                },
                error: function(){
                    alert("oupssss");
                }

            });

        },
        render: function() {
            this.$el.html(this.template({tvShowInfo: this.tvShowInfo.toJSON()}));
        }
    });


    return TvShowView;
});