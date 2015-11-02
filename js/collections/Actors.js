/**
 * Created by Maxime on 2015-11-01.
 */

define([
    'underscore',
    'backbone',
    'models/Actor'
], function( _, Backbone, Actor){
    var ActorCollection = Backbone.Collection.extend({
        model: Actor,
        url: 'https://umovie.herokuapp.com/unsecure/actors/272994458',
        parse:function (response){
            return response;
        }
    });
    return ActorCollection;
});