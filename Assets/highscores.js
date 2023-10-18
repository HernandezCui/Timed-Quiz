// DOM Elements 
var scoresContainer = document.getElementById("scores");
var scoreList = document.getElementById("score-list");
var clearScoresBtn = document.getElementById("clear-scores");
var returnBtn = document.getElementById("return");


// Clear button
function clearScores() {
    localStorage.removeItem("highScores");
    scoreList.innerHTML = "";
}

clearScoresBtn.addEventListener("click", clearScores);

// Return button 
function returnToMain() {
    window.location.href = "index.html";
}

returnBtn.addEventListener("click", returnToMain);

// Load And display scores
document.addEventListener("DOMContentLoaded", function () {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
    if (highScores.length > 0) {
        scoresContainer.classList.remove("hidden");
        highScores.forEach(function (score, index) {
            var listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
            scoreList.appendChild(listItem);
        });
    }
});