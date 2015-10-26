/**
 * Created by RoxanneLandry on 15-10-26.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'MainPageView'
], function($, _, Backbone, MainPageView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '':'home'
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;

        app_router.on('route:home', function(){
            var mainPageView  = new MainPageView();
            mainPageView.render();
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});