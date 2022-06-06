function loadAddGamePage() {
//Get all players from currently logged user's team, as an array
    var request = new XMLHttpRequest();
    request.open('get', "https://fantasy-basketball-league-mgr.herokuapp.com/teams/", true);
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
                playersNamesArrayGlobal.push(players[i].name);
                playersIdsArrayGlobal.push(players[i].id);
                document.getElementById('playersSelect').appendChild(option);
            }


        }
    }
}

//Players are added at the same time on both lists when the page loads.
//it's possible to know a player ID by looking at the number
//at it's index on other array, and vice versa.
var playersNamesArrayGlobal = [];
var playersIdsArrayGlobal = [];

function addGame() {
    event.preventDefault();

    var player = playersIdsArrayGlobal[playersNamesArrayGlobal.indexOf(document.getElementById("playersSelect").value)];
    console.log(player);
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
    request.open("POST", "https://fantasy-basketball-league-mgr.herokuapp.com/games/", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function () {
        console.log(this.responseText);
    }

    alert("Game added successfully!")
    return request.responseText;
}




