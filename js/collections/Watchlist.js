/**
 * Created by RoxanneLandry on 15-10-30.
 */
define([
    'underscore',
    'backbone',
    'models/Watchlist'
], function( _, Backbone, WatchlistModel){
    var WatchlistCollection = Backbone.Collection.extend({
        model: WatchlistModel,
        url: 'https://umovie.herokuapp.com/unsecure/watchlists',
        parse:function (response){
            return response;
        }
    });
    return WatchlistCollection;
});
