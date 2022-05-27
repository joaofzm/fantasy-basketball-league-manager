
function loadWelcomePage() {
    currentLoggedTeamId = localStorage.getItem("currentLoggedTeamId");
    document.getElementById("welcome_message").innerHTML = "Welcome, " + localStorage.getItem("currentlyLoggedUserUsername") + "!";
    document.getElementById("current_team_label").innerHTML = "Owned team: " + localStorage.getItem("currentLoggedTeamName") + "!";
}

function logIn() {
    var typedUsername = document.getElementById("usernameTextBox").value;
    var typedPassword = document.getElementById("passwordTextBox").value;

    var request = new XMLHttpRequest();
    request.open('get', "http://localhost:8080/users/", true);
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
                    window.location.href = "/pages/homepage.html";
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

function addPlayer() {
    //Mocked implementation
    //Currently adding a fixed player name and ID
    event.preventDefault();

    body = {
        "name": "Paul George",
        "team": {
            "id": 1
        }
    }

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/players/", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function () {
        console.log(this.responseText);
    }

    return request.responseText;
}