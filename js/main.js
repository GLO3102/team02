require.config({
    paths: {
        jquery: 'libs/jquery/jquery-2.1.4',
        bootstrap: 'libs/bootstrap/bootstrap',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        presentation: 'presentation/UMoviePresentation',
        text: 'libs/require/text',
        slick: 'libs/slick-1.5.7/slick/slick.min',



    },
    shim: {
        'bootstrap':{
            deps:['jquery']
        },
        'slick': {
            deps:['jquery'],
            exports: 'jQuery.fn.slick'
        }
    }
});

require([
    'app'
], function(App){
    App.initialize();
});