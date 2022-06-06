function loadLeaderboardPage() {
    var request = new XMLHttpRequest();
    request.open('get', "https://fantasy-basketball-league-mgr.herokuapp.com/users/", true);
    request.setRequestHeader('Content-Type', 'text/plain');
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            var requestResponseText = request.responseText;
            var parsedData = JSON.parse(requestResponseText);

            for (var i = 0; i < parsedData.length; i++) {
                var teamName = parsedData[i].teams[0].name;
                var ownerName = parsedData[i].username;
                var totalPoints = 0;
                var totalAssists = 0;
                var totalRebounds = 0;
                var totalSteals = 0;
                var totalBlocks = 0;
                for (var j = 0; j < parsedData[i].teams[0].players.length; j++) {
                    for (var k = 0; k < parsedData[i].teams[0].players[j].games.length; k++) {
                        totalPoints += parsedData[i].teams[0].players[j].games[k].points;
                        totalAssists += parsedData[i].teams[0].players[j].games[k].assists;
                        totalRebounds += parsedData[i].teams[0].players[j].games[k].rebounds;
                        totalSteals += parsedData[i].teams[0].players[j].games[k].steals;
                        totalBlocks += parsedData[i].teams[0].players[j].games[k].blocks;
                    }
                }
                var totalEverything = 0;
                totalEverything += totalPoints;
                totalEverything += totalAssists *2;
                totalEverything += totalRebounds * 2;
                totalEverything += totalSteals * 2.5;
                totalEverything += totalBlocks * 2.5;
                var div = document.getElementById('leaderboard_div');
                var p = document.createElement("p");
                p.innerHTML = teamName + " - "+totalEverything+" fantasy points   |   Owner: "+ownerName;
                div.append(p);

            }
        }
    }



}
