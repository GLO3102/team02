function sendLoginRequest() {
    var username = $("#usernameInput")[0].value;
    var password = $("#passwordInput")[0].value;
    document.location.href = "mainPage.html";
}

$(document).ready(function () {
    $("#usernameInput").keypress(function (event) {
        if (event.keyCode == 13) {
            sendLoginRequest();
        }
    });
    $("#passwordInput").keypress(function (event) {
        if (event.keyCode == 13) {
            sendLoginRequest();
        }
    });
});