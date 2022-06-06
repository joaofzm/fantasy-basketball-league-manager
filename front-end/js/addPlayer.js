function addPlayer() {
    event.preventDefault();

    var typedName = document.getElementById("playerNameTextBox").value;
    
    body = {
        "name": typedName,
        "team": {
            "id": localStorage.getItem("currentLoggedTeamId")
        }
    }

    var request = new XMLHttpRequest();
    request.open("POST", "https://fantasy-basketball-league-mgr.herokuapp.com/players/", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function () {
        console.log(this.responseText);
    }

    alert(typedName + " added successfully!")
    return request.responseText;
}