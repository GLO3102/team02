/**
 * Created by RoxanneLandry on 15-10-26.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'models/Actor',
    'views/ActeurView',
], function($, _, Backbone, Router,ActorModel,ActorView){

    var initialize = function(){
        Router.initialize();
    };
    return {
        initialize: initialize
    };
});