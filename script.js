// Quiz data variables 
var questions = [
    {
        question: "Question 1?",
        choices: ["Option 1", "Option 2", "Option 3"],
        correctAnswer: 0, // Index of the correct answer
    },
];

let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 0; // Initial time in seconds 
var penaltyTime = 10; // Penalty for incorrect answers 
let score = 0; 

// DOM Elements 
var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("timer");
var questionTextElement = document.getElementById("question-text");
var choicesElement = document.getElementById("choices");
var endOfQuizElement = document.getElementById("end-of-quiz");
var initialsInput = document.getElementById("initials-input");
var submitButton = document.getElementById("submit-button");
var finalScoreElement = document.getElementById("final-score");

// Start Quiz 
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.classList.add("hidden");
    endOfQuizElement.classList.add("hidden");
    timeLeft = 60; // Setting initial time in seconds 
    score = 0; 
    currentQuestionIndex = 0;
    updateTimer();
    nextQuestion();
    timerInterval = setInterval(updateTimer, 1000);
}


