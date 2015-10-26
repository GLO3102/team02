require.config({
    paths: {
        jquery: 'libs/jquery/jquery-2.1.4',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        slick: 'libs/slick-1.5.7/slick/slick.js',
        MainPageView :'views/MainPageView',
        text: 'libs/require/text'
    }

});

require([
    'app'
], function(App){
    App.initialize();
});