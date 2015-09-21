/**
 * Created by Eliane on 2015-09-16.
 */

function player() {
    window.open("pageVideo.html", 'Trailer', 'menubar=no, scrollbars=no, top=100, left=100, width=600, height=400');
}


$(document).ready(function () {
    $('.carouselMultiple').slick({
        infinite: true,
        adaptiveWidth: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1194,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 1029,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }


        ]
    });
});