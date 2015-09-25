function AddMovieRow() {
    for(var i = 0; i < 2 ; i++  ) {
        $("#listMovie")
            .append(
            "<tr>"
            + "<td><img class='imageList' src='../images/Movies/Blended.png'><a class='linkUnderline' href='pageVideo.html'>Blended</a></td>"
            + "<td class='pullright'>2014-05-21</td>"
            + "</tr>");
        $("#listMovie")
            .append(
            "<tr class='bigestOpacity'>"
            + "<td><img class='imageList' src='../images/Movies/GrownUps.png'><a class='linkUnderline' href='pageVideo.html'>Grown Up</a></td>"
            + "<td class='pullright'>2010-11-05</td>"
            + "</tr>");
    }
}
function AddTvShowRow() {
    for(var i = 0; i < 2 ; i++  ){
        $("#listTvShow")
            .append(
                "<tr>"
                + "<td><img class='imageList' src='../images/BlankImg.png'><a class='linkUnderline' href='pageVideo.html'>Tv show name</a></td>"
                + "<td class='pullright'>Date</td>"
                + "</tr>");
        $("#listTvShow")
            .append(
                "<tr>"
                + "<td><img class='imageList' src='../images/BlankImg.png'><a class='linkUnderline' href='pageVideo.html'>Tv show name</a></td>"
                + "<td class='pullright'>Date</td>"
                + "</tr>");

    }
}
