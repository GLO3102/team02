/**
 * Created by Marina on 2015-11-01.
 */

define([
    'underscore',
    'backbone'
], function( _, Backbone){



    var TvShow = Backbone.Model.extend({
        urlRoot: 'https://umovie.herokuapp.com/unsecure/actors/253584821',
        parse:function (response){
            return response;
        }
    });
    return TvShow;
});