/**
 * Created by Maxime on 2015-10-30.
 */

Actor = Backbone.Model.extend({
    urlRoot: 'https://umovie.herokuapp.com/unsecure/actors',
    parse:function (response){
        return response;
    }
});
