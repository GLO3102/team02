/**
 * Created by RoxanneLandry on 15-10-30.
 */
define([
    'jquery',
    'bootstrap',
    'presentation',
    'underscore',
    'backbone',
    'models/Watchlist',
    'text!templates/watchlist.html'
], function($, _bootstrap, presentation,  _, Backbone, WatchlistModel, watchlistTemplate){
    var WatchlistView = Backbone.View.extend({
        initialize: function(){
        },
        el: $(".content"),
        template: _.template(watchlistTemplate),
        events: {
            "click .buttonSaveWatchlist": "SaveWatchlist",
            "click .deleteButton": "DeleteMovie"
        },
        SaveWatchlist: function (ev) {
            debugger;
            var that = this;
            var watchlistId = $('#watchlistId').val();
            var name = $('#titleWatchlist').val();
            var watchlistModel = new WatchlistModel();
            watchlistModel.save({
                id:watchlistId,
                name:name
            }, {
                success: function (watchlistModel) {
                }
            });
        },
        DeleteMovie: function(){
            var WatchlistId = $(event.target).data('id');
            var model = this.collection.get(WatchlistId);
            model.destroy();
            this.collection.remove(WatchlistId);
        },
        render: function (options) {
            var that = this;
            if(options.id) {
                that.watchlistModel = new WatchlistModel({id: options.id});
                that.watchlistModel.fetch({
                    success: function (watchlistModel) {
                        that.$el.html(that.template({watchlistModel: watchlistModel.toJSON()}));
                    }
                })
            } else {
                that.$el.html(that.template({watchlistModel:null}));
            }
        }
    });
    return WatchlistView;
});