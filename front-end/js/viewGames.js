function loadViewGamesPage() {

    //First request loads select with all player names
    var fillSelectRequest = new XMLHttpRequest();
    fillSelectRequest.open('get', "http://localhost:8080/teams/", true);
    fillSelectRequest.setRequestHeader('Content-Type', 'text/plain');
    fillSelectRequest.send();
    fillSelectRequest.onreadystatechange = function () {
        if (fillSelectRequest.readyState === 4) {
            var fillSelectRequestResponseText = fillSelectRequest.responseText;
            var parsedData = JSON.parse(fillSelectRequestResponseText);

            var players = [];

            for (var i = 0; i < parsedData.length; i++) {
                if (parsedData[i].id == localStorage.getItem("currentLoggedTeamId")) {
                    for (var j = 0; j < parsedData[i].players.length; j++) {
                        players.push(parsedData[i].players[j]);
                    }
                }
            }
            //Add the players from the array to the HTML select as options
            //"All Players" option before other options
            var option = document.createElement('option');
            option.value = "All Players";
            option.innerHTML = "All Players";
            document.getElementById('playersSelect').appendChild(option);
            for (var i = 0; i < players.length; i++) {
                var option = document.createElement('option');
                option.value = players[i].name;
                option.innerHTML = players[i].name;
                document.getElementById('playersSelect').appendChild(option);
            }
        }
    }

    //Second request prints data
    var printAllPlayersGamesRequest = new XMLHttpRequest();
    printAllPlayersGamesRequest.open('get', "http://localhost:8080/teams/"+localStorage.getItem("currentLoggedTeamId"), true);
    printAllPlayersGamesRequest.setRequestHeader('Content-Type', 'text/plain');
    printAllPlayersGamesRequest.send();
    printAllPlayersGamesRequest.onreadystatechange = function () {
        if (printAllPlayersGamesRequest.readyState === 4) {
            var printAllPlayersGamesRequestResponseText = printAllPlayersGamesRequest.responseText;
            var parsedData = JSON.parse(printAllPlayersGamesRequestResponseText);
            console.log(parsedData);

            for (var i = 0; i < parsedData.players.length; i++) {
                for (var j = 0; j < parsedData.players[i].games.length; j++) {
                    var div = document.getElementById('view_games_div');
                    var p = document.createElement("p");

                    p.innerHTML =
                    parsedData.players[i].name + ": "
                    + parsedData.players[i].games[j].points + " PTS | "
                    + parsedData.players[i].games[j].assists + " AST | "
                    + parsedData.players[i].games[j].rebounds + " REB | "
                    + parsedData.players[i].games[j].blocks + " BLK | "
                    + parsedData.players[i].games[j].steals + " STL";
                    
                    div.append(p);

                    console.log(parsedData.players[i].games[j]);
                }
            }
        }
    }

}


