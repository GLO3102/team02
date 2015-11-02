/**
 * Created by RoxanneLandry on 15-10-26.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/MenuBarView',
    'views/MainPageView',
    'views/ActeurView',
    'models/Actor'
], function($, _, Backbone,MenuBarView, MainPageView,ActorView, ActorModel){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '':'home',
            'actor':'actor'
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

        router.on('route:actor',function(){
            var actorModel = new ActorModel;
            debugger;
            var actorView = new ActorView({model:actorModel});
            actorView.render();
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});