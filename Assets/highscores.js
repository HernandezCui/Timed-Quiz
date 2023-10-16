// DOM Elements
var scoresList = document.getElementById("score-list");
var clearScoresButton = document.getElementById("clear-scores");
var returnButton = document.getElementById("return");

// Load and display high scores when the page is loaded
function displayHighScores() {
    var storedHighScores = localStorage.getItem("highScores");
    if (storedHighScores) {
        highScores = JSON.parse(storedHighScores);
        highScores.sort((a,b) => b.score - a.score);// sort high scores in descending order

//display high scores in list 
        scoresList.innerHTML = ""; 
        for (var i = 0; i < highScores.length; i++) {
            var scoreItem = document.createElement("li");
            scoreItem.textContent = highScores[i].initials + " - " + highScores[i].score;
            scoresList.appendChild(scoreItem);
        }
    }
}

