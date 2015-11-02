/**
 * Created by RoxanneLandry on 15-10-26.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router){
    var initialize = function(){
        Router.initialize();
    };
    return {
        initialize: initialize
    };
});