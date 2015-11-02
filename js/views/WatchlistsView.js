/**
 * Created by RoxanneLandry on 15-10-30.
 */
define([
    'jquery',
    'bootstrap',
    'underscore',
    'backbone',
    'collections/Watchlist',
    'text!templates/watchlists.html'

], function($, _bootstrap,  _, Backbone, WatchlistCollection, watchlistsTemplate){
    var WatchlistsView = Backbone.View.extend({
        template: _.template(watchlistsTemplate),
        el: $(".content"),
        events: {
            "click .boutonDelete": "DeleteWatchlist",
            "click #buttonNewWatchlist": "AddWatchlist"
        },
        initialize: function(){
            _.bindAll(this, 'render');
            var that = this;
            this.collection = new WatchlistCollection();
            this.collection.fetch({
                success: function (collection) {
                    console.log('collection fetch');
                },
                error: function(){
                    console.log('collection not fetch');
                }
            });
            this.collection.bind('sync destroy save', function () {
                that.render();
            });
        },
        DeleteWatchlist: function(event) {
            var watchlistId = $(event.target).data('id');
            var model = this.collection.get(watchlistId);
            model.destroy();
            this.collection.remove(watchlistId);
        },
        render: function () {
            this.$el.html(this.template({watchlists: this.collection.toJSON()}));
        }
    });
    return WatchlistsView;
});