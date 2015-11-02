/**
 * Created by Eliane on 2015-11-02.
 */

define([
    'underscore',
    'backbone'
], function( _, Backbone){
    var TvShow = Backbone.Model.extend({
        urlRoot: 'https://umovie.herokuapp.com/unsecure/tvshows/season/533936970',
        parse:function (response){
            return response;
        }
    });
    return TvShow;
});