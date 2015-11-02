/**
 * Created by RoxanneLandry on 15-09-15.
 */
define([
    'owl'
], function(owl) {
    $(document).ready(function () {
        function afficherSearch(id) {
            var searchBar = document.getElementById(id);
            if (searchBar.style.display == 'none') {
                searchBar.style.display = 'inline';
                searchBar.focus();
            } else {
                searchBar.style.display = 'none';
            }
        }

        $("#owl1").owlCarousel({
            autoPlay: 3000,
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });
    });
});