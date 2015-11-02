/**
 * Created by RoxanneLandry on 15-10-30.
 */
define([
    'underscore',
    'backbone'
], function( _, Backbone){
    var WatchlistModel = Backbone.Model.extend({
        urlRoot: 'https://umovie.herokuapp.com/unsecure/watchlists',
        parse:function (response){
            return response;
        }
    });
    return WatchlistModel;
});