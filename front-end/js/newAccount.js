function register() {
    event.preventDefault();

    var typedUsername = document.getElementById("usernameTextBox").value;
    var typedTeamName = document.getElementById("teamNameTextBox").value;
    var typedPassword = document.getElementById("passwordTextBox").value;

    var getAllUsersRequest = new XMLHttpRequest();
    getAllUsersRequest.open('get', "https://fantasy-basketball-league-mgr.herokuapp.com/users/", true);
    getAllUsersRequest.setRequestHeader('Content-Type', 'text/plain');
    getAllUsersRequest.send();

    getAllUsersRequest.onreadystatechange = function () {
        if (getAllUsersRequest.readyState === 4) {
            var getAllUsersRequestResponseText = getAllUsersRequest.responseText;
            var parsedData = JSON.parse(getAllUsersRequestResponseText);

            var usernameAlreadyInUse = false;
            for (var i = 0; i < parsedData.length; i++) {
                if (typedUsername == parsedData[i].username) {
                    usernameAlreadyInUse = true;
                }
            }
            if (!usernameAlreadyInUse) {

                postUserBody = {
                    "username": typedUsername,
                    "password": typedPassword
                }

                var postUserRequest = new XMLHttpRequest();
                postUserRequest.open("POST", "https://fantasy-basketball-league-mgr.herokuapp.com/users/", true);
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
                    postTeamRequest.open("POST", "https://fantasy-basketball-league-mgr.herokuapp.com/teams/", true);
                    postTeamRequest.setRequestHeader("Content-type", "application/json");
                    postTeamRequest.send(JSON.stringify(postTeamBody));
                    postTeamRequest.onload = function () {
                        console.log(this.responseText);
                    }
                }

                alert(typedUsername + " registered successfully!")
                return postUserRequest.responseText;
          
            } else {
                alert("This username is already in use, try a different one!")
            }
        }
    }

}


