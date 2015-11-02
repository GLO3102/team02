require.config({
    paths: {
        jquery: 'libs/jquery/jquery-2.1.4',
        bootstrap: 'libs/bootstrap/bootstrap',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        menuBar: 'presentation/MenuBar',
        text: 'libs/require/text',
        owl: 'libs/owl/owl.carousel',
        owlPresentation: 'presentation/Owl'

    },
    shim: {
        'bootstrap':{
            deps:['jquery']
        },
        'owlPresentation':{
            deps:['owl']
        }
    }
});

require([
    'app'
], function(App){
    App.initialize();
});