function logIn() {
    var typedUsername = document.getElementById("usernameTextBox").value;
    var typedPassword = document.getElementById("passwordTextBox").value;

    var request = new XMLHttpRequest();
    request.open('get', "https://fantasy-basketball-league-mgr.herokuapp.com/users/", true);
    request.setRequestHeader('Content-Type', 'text/plain');
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            var requestResponseText = request.responseText;
            var parsedData = JSON.parse(requestResponseText);

            var matched = false;
            for (var i = 0; i < parsedData.length; i++) {
                if (typedUsername == parsedData[i].username && typedPassword == parsedData[i].password) {
                    localStorage.setItem("currentlyLoggedUserUsername", parsedData[i].username);
                    localStorage.setItem("currentlyLoggedUserId", parsedData[i].id);
                    localStorage.setItem("currentLoggedTeamName", parsedData[i].teams[0].name);
                    localStorage.setItem("currentLoggedTeamId", parsedData[i].teams[0].id);
                    matched = true;
                    window.location.href = "/front-end/pages/homepage.html";
                    break;
                }
            }
            if (matched == false) {
                alert("Incorrect username or password!");
            }
        }
    }
}

function logOut() {
    localStorage.clear();
    window.location.href = "/index.html";
}

