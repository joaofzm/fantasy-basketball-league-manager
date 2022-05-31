function register() {
    event.preventDefault();

    var typedUsername = document.getElementById("usernameTextBox").value;
    var typedTeamName = document.getElementById("teamNameTextBox").value;
    var typedPassword = document.getElementById("passwordTextBox").value;
    postUserBody = {
        "username": typedUsername,
        "password": typedPassword
    }

    var postUserRequest = new XMLHttpRequest();
    postUserRequest.open("POST", "http://localhost:8080/users/", true);
    postUserRequest.setRequestHeader("Content-type", "application/json");
    postUserRequest.send(JSON.stringify(postUserBody));
    postUserRequest.onload = function () {
        var userResponseText = this.responseText;
        var parsedData = JSON.parse(userResponseText);
        console.log(userResponseText);
        

        postTeamBody = {
            "name": typedTeamName,
            "user": {
                "id": parsedData.id
            }
        }
        var postTeamRequest = new XMLHttpRequest();
        postTeamRequest.open("POST", "http://localhost:8080/teams/", true);
        postTeamRequest.setRequestHeader("Content-type", "application/json");
        postTeamRequest.send(JSON.stringify(postTeamBody));
        postTeamRequest.onload = function () {
            console.log(this.responseText);
        }
    }

    alert(typedUsername + " registered successfully!")
    // window.location.href = "/index.html";
    return postUserRequest.responseText;
}