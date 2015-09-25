function AddMovieRow() {
    for(var i = 0; i < 2 ; i++  ) {
        $("#listMovie")
            .append(
            "<tr>"
            + "<td><img class='imageList' src='../images/Lorax.jpg'><a class='linkUnderline' href='pageVideo.html'>The lorax</a></td>"
            + "<td class='pullright'>2014-01-01</td>"
            + "</tr>");
        $("#listMovie")
            .append(
            "<tr class='bigestOpacity'>"
            + "<td><img class='imageList' src='../images/Lorax.jpg'><a class='linkUnderline' href='pageVideo.html'>The lorax</a></td>"
            + "<td class='pullright'>2014-01-01</td>"
            + "</tr>");
    }
}
function AddTvShowRow() {
    for(var i = 0; i < 2 ; i++  ){
        $("#listTvShow")
            .append(
                "<tr>"
                + "<td><img class='imageList' src='../images/Lorax.jpg'><a class='linkUnderline' href='pageVideo.html'>The lorax</a></td>"
                + "<td class='pullright'>2014-01-01</td>"
                + "</tr>");
        $("#listTvShow")
            .append(
                "<tr class='bigestOpacity'>"
                + "<td><img class='imageList' src='../images/Lorax.jpg'><a class='linkUnderline' href='pageVideo.html'>The lorax</a></td>"
                + "<td class='pullright'>2014-01-01</td>"
                + "</tr>");

    }
}
