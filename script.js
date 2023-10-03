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

// Updating the timer function 
function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    } else {
        timeLeft--;
    }
}

// function to display next questions 
function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        var question = questions[currentQuestionIndex];
        questionTextElement.textContent = question.question;
        choicesElement.innerHTML = "";
        question.choices.forEach((choice, index) => {
            var choiceButton = document.createElement("button"); 
            choiceButton.textContent = choice; 
            choiceButton.addEventListener("click", () => {
                checkAnswer(index);
            });
            choicesElement.appendChild(choiceButton);
        });
    } else {
        endQuiz();
    }
}

// Function to check the answer
function checkAnswer(selectedIndex) {
    var question = questions[currentQuestionIndex];
    if (selectedIndex === questions.correctAnswer) {
        score++;
    } else {
        timeLeft -= penaltyTime;
    }
    currentQuestionIndex++;
    nextQuestion();
}

// function to end quiz 
function endQuiz() {
    clearInterval(timerInterval);
    questionTextElement.textContent = "";
    choicesElement.innerHTML = "";
    finalScoreElement.textContent = score;
    endOfQuizElement.classList.remove("hidden");
}



