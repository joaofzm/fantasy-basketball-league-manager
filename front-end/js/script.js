function login() {
    var typedUsername = document.getElementById("usernameTextBox").value;
    var typedPassword = document.getElementById("passwordTextBox").value;

    var request = new XMLHttpRequest();
    request.open('get', "http://localhost:8080/users/", true);
    request.setRequestHeader('Content-Type', 'text/plain');
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            let requestResponseText = request.responseText;
            let parsedData = JSON.parse(requestResponseText);
            for (let i = 0; i < parsedData.length; i++){
                if (typedUsername == parsedData[i].username && typedPassword == parsedData[i].password){
                    alert("Welcome, "+parsedData[i].username+"!");
                    break;
                }
                alert("Incorrect username or password!");
            }
        }
    }
}