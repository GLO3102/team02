/**
 * Created by RoxanneLandry on 15-09-15.
 */
function activeDisplay(){
    var affichage = document.getElementById('navbarSmall');
    var button = document.getElementById('buttonBurger');
    alert(button === document.activeElement);
    if (affichage.style.display == "none" && button === document.activeElement){
        affichage.style.display = "block";
        alert(button === document.activeElement);
    }
    else{
        affichage.style.display = "none";
        alert(button === document.activeElement);
        button.blur();
        alert(button === document.activeElement);
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