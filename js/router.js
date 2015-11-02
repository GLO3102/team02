/**
 * Created by RoxanneLandry on 15-10-26.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/MenuBarView',
    'views/MainPageView',
    'views/ActorView',
    'views/WatchlistsView',
    'views/WatchlistView'
], function($, _, Backbone,MenuBarView, MainPageView, ActorView, WatchlistsView, WatchlistView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '':'home',
            'actor':'actor',
            'watchlists':'watchlists',
            'newwatchlist':'watchlist',
            'watchlist/:id':'watchlist'

        }
    });

    var initialize = function(){
        var router = new AppRouter;
        var menuBarView  = new MenuBarView();


        router.on('route:home', function(){
            var mainPageView = new MainPageView();
            mainPageView.render();
            menuBarView.render();
        });

        router.on('route:actor',function(){
            var actorView = new ActorView();
            actorView.render();
            menuBarView.render();
        });

        router.on('route:watchlists',function(){
            var watchlistsView = new WatchlistsView();
            watchlistsView.render();
            menuBarView.render();
        });

        router.on('route:watchlist',function(id){
            var watchlistView = new WatchlistView({router: router});
            watchlistView.render({id:id});
            menuBarView.render();
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});