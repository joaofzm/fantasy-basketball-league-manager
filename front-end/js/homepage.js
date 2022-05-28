function loadHomePage() {
    currentLoggedTeamId = localStorage.getItem("currentLoggedTeamId");
    document.getElementById("welcome_message").innerHTML = "Welcome, " + localStorage.getItem("currentlyLoggedUserUsername") + "!";
    document.getElementById("current_team_label").innerHTML = "Owned team: " + localStorage.getItem("currentLoggedTeamName") + "!";
}