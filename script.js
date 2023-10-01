// Quiz questions and answers 
var questions = [
    { 
        questions: "Question 1?",
        choices: ["1", "2", "3"],
        correct: 0, // Index of correct answer in choices 

    },

];

let currentQuestion = 0;
let timeLeft = 60; // total time
let timerInterval; 
let score = 0;

var startBtn = document.getElementById("start-button");
var quizContainer = document.getElementById("questions");
var questionText = document.getElementById("question-text");
var choicesContainer = document.getElementById("choices");
var resultsContainer = document.getElementById("end-of-quiz");
var finalScore = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitScoreBtn = document.getElementById("submit-button");
var highScoreContainer = document.getElementById("scores");
var scoresList = document.getElementById("score-list");
var clearScoresBtn = document.getElementById("clear-scores");
var goBackBtn = document.getElementById("return");

startBtn.addEventListener("click", startQuiz);
submitScoreBtn.addEventListener("click", saveScore);
clearScoresBtn.addEventListener("click", clearScores);
goBackBtn.addEventListener("click", goBackToQuiz);
