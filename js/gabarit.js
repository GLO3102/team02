/**
 * Created by RoxanneLandry on 15-09-15.
 */
function activeDisplay(id,id2){
    var affichage = document.getElementById(id);
    var button = document.getElementById(id2);
    if (affichage.style.display == "none" && button === document.activeElement){
        affichage.style.display = "block";
    }
    else{
        affichage.style.display = "none";
        button.blur();
    }
}

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