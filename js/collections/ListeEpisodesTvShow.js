/**
 * Created by Eliane on 2015-11-02.
 */


define([
    'underscore',
    'backbone',
    'models/EpisodeTvShow'
], function( _, Backbone, EpisodeTvShow){
    var ListeEpisodesTvShow = Backbone.Collection.extend({
        model: EpisodeTvShow,
        url: 'https://umovie.herokuapp.com/unsecure/tvshows/season/533936970/episodes',
        parse:function (response){
            return response;
        }
    });
    return ListeEpisodesTvShow;
});
