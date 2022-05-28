function loadAddGamePage() {
//Get all players from currently logged user's team, as an array
    var request = new XMLHttpRequest();
    request.open('get', "http://localhost:8080/teams/", true);
    request.setRequestHeader('Content-Type', 'text/plain');
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            var requestResponseText = request.responseText;
            var parsedData = JSON.parse(requestResponseText);

            var players = [];

            for (var i = 0; i < parsedData.length; i++) {
                if (parsedData[i].id == localStorage.getItem("currentLoggedTeamId")) {
                    for (var j = 0; j < parsedData[i].players.length; j++) {
                        players.push(parsedData[i].players[j]);
                    }
                }
            }

            //Add the players from the array to the HTML select as options
            for (var i = 0; i<  players.length; i++){
                var option = document.createElement('option');
                option.value = players[i].name;
                option.innerHTML = players[i].name;
                document.getElementById('playersSelect').appendChild(option);
            }


        }
    }
}

function addGame() {
    event.preventDefault();

    //Player ID is still mocked, TODO: Get right player id from select
    var sel = document.getElementById("playersSelect").value;
    
    var player = 1;
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
            "id": player
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




