
function loadWelcomePage(){
    currentLoggedTeamId = localStorage.getItem("currentLoggedTeamId");
    document.getElementById("welcome_message").innerHTML = "Welcome, "+localStorage.getItem("currentlyLoggedUsername")+"!";
    document.getElementById("current_team_label").innerHTML = "Owned team: "+localStorage.getItem("currentLoggedTeamName")+"!";
}

function logIn() {
    var typedUsername = document.getElementById("usernameTextBox").value;
    var typedPassword = document.getElementById("passwordTextBox").value;

    var request = new XMLHttpRequest();
    request.open('get', "http://localhost:8080/users/", true);
    request.setRequestHeader('Content-Type', 'text/plain');
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            var requestResponseText = request.responseText;
            var parsedData = JSON.parse(requestResponseText);

            var matched = false;
            for (var i = 0; i < parsedData.length; i++){
                if (typedUsername == parsedData[i].username && typedPassword == parsedData[i].password){
                    localStorage.setItem("currentlyLoggedUsername", parsedData[i].username);
                    localStorage.setItem("currentLoggedTeamName", parsedData[i].teams[0].name);
                    localStorage.setItem("currentLoggedTeamId", parsedData[i].teams[0].id);
                    matched = true;
                    window.location.href = "/pages/afterlogin.html";
                    break;
                }
            }
            if (matched==false){
                alert("Incorrect username or password!");
            }
        }
    }
}

function logOut(){
    localStorage.clear();
    window.location.href = "/index.html";
}