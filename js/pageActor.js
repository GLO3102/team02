function AddMovieRow() {
    for(var i = 0; i < 2 ; i++  ) {
        $("#listMovie")
            .append(
            "<tr>"
            + "<td><img class='imageList' src='../images/Lorax.jpg'>The lorax</td>"
            + "<td class='pullright'>Lorax</td>"
            + "</tr>");
        $("#listMovie")
            .append(
            "<tr class='bigestOpacity'>"
            + "<td><img class='imageList' src='../images/Lorax.jpg'>The lorax</td>"
            + "<td class='pullright'>Lorax</td>"
            + "</tr>");
    }
}
function AddTvShowRow() {
    for(var i = 0; i < 2 ; i++  ){
        $("#listTvShow")
            .append(
                "<tr>"
                + "<td><img class='imageList' src='../images/Lorax.jpg'>The lorax</td>"
                + "<td class='pullright'>Lorax</td>"
                + "</tr>");
        $("#listTvShow")
            .append(
                "<tr class='bigestOpacity'>"
                + "<td><img class='imageList' src='../images/Lorax.jpg'>The lorax</td>"
                + "<td class='pullright'>Lorax</td>"
                + "</tr>");

    }
}
