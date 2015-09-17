/**
 * Created by RoxanneLandry on 15-09-13.
 */
$(document).ready(function(){
    $('.carouselMultiple').slick({
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        adaptiveHeight:true,
        responsive: [
            {
                breakpoint: 1194,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,

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
                breakpoint: 450,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(window).resize(function findMaxHeight(){
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
    }*/

    location.reload();
});

$(document).ready(function findMaxHeight(){
    var maxHeight = 0;
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
    }
});

