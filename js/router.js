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
    'views/WatchlistView',
    'views/TvShowView',
    'views/ListeTvShowsView',
    'views/EpisodeTvShowView',
    'views/ListeEpisodesTvShowView'

], function($, _, Backbone,MenuBarView, MainPageView, ActorView, WatchlistsView, WatchlistView, TvShowView,
                  ListeTvShowsView, EpisodeTvShowView, ListeEpisodesTvShowView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            '':'home',
            'actor':'actor',
            'watchlists':'watchlists',
            'newwatchlist':'watchlist',
            'watchlist/:id':'watchlist',
            'TvShow:':'TvShow',
            'ListeTvShows:':'ListeTvShows',
            'EpisodeTvShow:':'EpisodeTvShow',
            'ListeEpisodesTvShow:':'ListeEpisodesTvShow'

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

        router.on('route:TvShow',function(){
            var tvShowView = new TvShowView();
            tvShowView.render();
            menuBarView.render();
        });

        router.on('route:ListeTvShows',function(){
            var listeTvShowsView = new ListeTvShowsView();
            listeTvShowsView.render();
            menuBarView.render();
        });

        router.on('route:EpisodeTvShow',function(){
            var episodeTvShowView = new EpisodeTvShowView();
            episodeTvShowView.render();
            menuBarView.render();
        });

        router.on('route:ListeEpisodesTvShow',function(){
            var listeEpisodesTvShowView = new ListeEpisodesTvShowView();
            listeEpisodesTvShowView.render();
            menuBarView.render();
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});