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
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


