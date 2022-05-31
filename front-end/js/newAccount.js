function register() {
    event.preventDefault();

    var typedUsername = document.getElementById("usernameTextBox").value;
    var typedTeamName = document.getElementById("teamNameTextBox").value;
    var typedPassword = document.getElementById("passwordTextBox").value;
    
    body = {
        "username": typedUsername,
        "password": typedPassword
    }
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/users/", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));
    request.onload = function () {
        console.log(this.responseText);

        body2 = {
            "name": typedTeamName,
            "user": {
                "id": 3
            }
        }
        var request2 = new XMLHttpRequest();
        request2.open("POST", "http://localhost:8080/teams/", true);
        request2.setRequestHeader("Content-type", "application/json");
        request2.send(JSON.stringify(body2));
        request2.onload = function () {
            console.log(this.responseText);
        }
    }

    alert(typedUsername + " registered successfully!")
    return request.responseText;
}