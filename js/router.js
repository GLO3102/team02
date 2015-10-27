/**
 * Created by RoxanneLandry on 15-10-26.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/MenuBarView',
    'views/MainPageView'
], function($, _, Backbone,MenuBarView, MainPageView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '':'home',
            '/actors': 'actors'
        }
    });

    var initialize = function(){
        var router = new AppRouter;

        router.on('route:home', function(){
            var menuBarView  = new MenuBarView();
            var mainPageView = new MainPageView();
            mainPageView.render();
            menuBarView.render();
        });
        router.on('route:actors', function(){
            var menuBarView  = new MenuBarView();
            menuBarView.render();
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});