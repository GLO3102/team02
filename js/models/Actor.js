/**
 * Created by Maxime on 2015-10-30.
 */

define([
    'underscore',
    'backbone'
], function( _, Backbone){
    var Actor = Backbone.Model.extend({
        urlRoot: 'https://umovie.herokuapp.com/unsecure/actors/253584821',
        parse:function (response){
            return response;
        }
    });
    return Actor;
});