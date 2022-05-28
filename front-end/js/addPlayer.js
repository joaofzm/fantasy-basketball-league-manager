function addPlayer() {
    event.preventDefault();

    var typedName = document.getElementById("playerName").value;
    
    body = {
        "name": typedName,
        "team": {
            "id": localStorage.getItem("currentLoggedTeamId")
        }
    }

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/players/", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function () {
        console.log(this.responseText);
    }

    alert(typedName + " added successfully!")
    return request.responseText;
}