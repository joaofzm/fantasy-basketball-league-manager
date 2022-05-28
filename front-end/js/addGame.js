function addGame() {
    event.preventDefault();

    var points = document.getElementById("pointsTextBox").value;
    var assists = document.getElementById("assistsTextBox").value;
    var rebounds = document.getElementById("reboundsTextBox").value;
    var steals = document.getElementById("stealsTextBox").value;
    var blocks = document.getElementById("blocksTextBox").value;

    body = {
        "points": points,
        "assists": assists,
        "rebounds": rebounds,
        "steals": steals,
        "blocks": blocks,
        "player": {
            "id": 2
        }
    }

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/games/", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function () {
        console.log(this.responseText);
    }

    alert("Game added successfully!")
    return request.responseText;
}

function loadAddGamePage() {
    getPlayers();
}

function getPlayers() {
    var request = new XMLHttpRequest();
    request.open('get', "http://localhost:8080/players/", true);
    request.setRequestHeader('Content-Type', 'text/plain');
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            var requestResponseText = request.responseText;
            var parsedData = JSON.parse(requestResponseText);

            console.log(parsedData);
            // for (var i = 0; i < parsedData.length; i++) {
            //     if (typedUsername == parsedData[i].username && typedPassword == parsedData[i].password) {
            //         localStorage.setItem("currentlyLoggedUserUsername", parsedData[i].username);
            //         localStorage.setItem("currentlyLoggedUserId", parsedData[i].id);
            //         localStorage.setItem("currentLoggedTeamName", parsedData[i].teams[0].name);
            //         localStorage.setItem("currentLoggedTeamId", parsedData[i].teams[0].id);
            //         matched = true;
            //         window.location.href = "/pages/homepage.html";
            //         break;
            //     }
        }
    }
}