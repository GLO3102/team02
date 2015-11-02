require.config({
    paths: {
        jquery: 'libs/jquery/jquery-2.1.4',
        bootstrap: 'libs/bootstrap/bootstrap',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        menuBar: 'presentation/MenuBar',
        text: 'libs/require/text',
        slick: 'libs/slick/slick.min'

    },
    shim: {
        'bootstrap':{
            deps:['jquery']
        }
    }
});

require([
    'app'
], function(App){
    App.initialize();
});