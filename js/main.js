require.config({
    paths: {
        jquery: 'libs/jquery/jquery-2.1.4',
        bootstrap: 'libs/bootstrap/bootstrap',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        presentation: 'presentation/presentation',
        text: 'libs/require/text',
        owl: 'libs/owl/owl.carousel'


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