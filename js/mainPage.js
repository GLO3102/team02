/**
 * Created by RoxanneLandry on 15-09-13.
 */
$(document).ready(function () {
    $('.carouselMultiple').slick({
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1194,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 1029,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding:50
                }
            }
        ]
    });
});


/**
$(window).resize(function reload() {
    location.reload();
    /*Mettre image height default*/


    /*var maxHeight = 0;
    var divImg = document.getElementById('carouselAll');
    var img = divImg.getElementsByTagName('img');
    for (var i=0; i < img.length; i++){
        if(img[i].height > maxHeight){
            maxHeight = img[i].height;
        }
    }
    var divImg4 = document.getElementById('carouselAll');
    var img4 = divImg4.getElementsByTagName('img');
    for (var j=0; j < img4.length; j++){
        img4[j].height = maxHeight;
    }});*/

/**
$(document).ready(function findMaxHeight() {
    var maxHeight = 0;
    var divImg = document.getElementById('carouselAll');
    var img = divImg.getElementsByTagName('img');
    for (var i=0; i < img.length; i++){
        if(img[i].height > maxHeight){
            maxHeight = img[i].height;
        }
    }
    for (var j=0; j < img.length; j++){
        img[j].height = maxHeight;
    }
    var maxHeight2 = 0;
    var divImg2 = document.getElementById('carouselAll');
    var img2 = divImg2.getElementsByTagName('img');
    for (var x=0; x < img2.length; x++){
        if(img2[x].height > maxHeight2){
            maxHeight2 = img2[x].height;
        }
    }
    for (var y=0; y < img2.length; y++){
        img2[y].height = maxHeight2;
    }
});

*/