/**
 * Created by RoxanneLandry on 15-09-13.
 */

function afficherSearch(id)
{
    var searchBar = document.getElementById(id);
    if (searchBar.style.display == 'none'){
        searchBar.style.display = 'inline';
        searchBar.focus();
    }
    else{
        searchBar.style.display = 'none';
    }
}
function afficherNavbar(id)
{
    var searchBar = document.getElementById(id);
    if (searchBar.style.display == 'none'){
        searchBar.style.display = 'block';
        searchBar.focus();
    }
    else{
        searchBar.style.display = 'none';
    }
}