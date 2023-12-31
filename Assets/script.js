// Quiz data variables 
var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: 0, // Index of the correct answer
    },
    {
        question: "What does CSS stand for?",
        choices: ["Creative Style Sheets", "Computer Style Sheet", "Cascading Style Sheet", "Colorful Style Sheet"],
        correctAnswer: 2,
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables",
        choices: ["quotes", "curly brackets", "paranthesis", "commas"],
        correctAnswer: 0,
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["booleans", "alerts", "strings", "numbers"],
        correctAnswer: 1, 
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choices: ["other arrays", "booleans", "numbers and strings", "all of the above"],
        correctAnswer: 3,
    },
    {
        question: "Which tag is used to underline text?",
        choices: ["<u>", "<ul>", "<li", "<l>"],
        correctAnswer: 0,
    },
    {
        question: "HTML uses ___.",
        choices: ["labels", "quotes", "tabs", "tags"],
        correctAnswer: 3,
    },
];

// DOM Elements 
var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("timer");
var questionsContainer = document.getElementById("questions");
var questionTextElement = document.getElementById("question-text");
var choicesElement = document.getElementById("choices");
var endOfQuizElement = document.getElementById("end-of-quiz");
var submitButton = document.getElementById("submit-button");
var finalScoreElement = document.getElementById("final-score");

var currentQuestionIndex = 0;
var timerInterval;
var timeLeft = 30;
var total = 0;
// var highScores = [];


// start quiz 
function startQuiz() {
    startButton.style.display = "none";
    var landingScreen = document.getElementById("start-quiz");
    landingScreen.setAttribute("class", "hide");

    //hide main text when starting quiz 
    var quizTitle = document.getElementById("quiz-title");
    var quizDescription = document.getElementById("quiz-description");
    quizTitle.style.display = "none";
    quizDescription.style.display = "none";

    questionsContainer.classList.remove("hidden");
    endOfQuizElement.classList.add("hidden");

    var storedHighScores = localStorage.getItem("highScores");
    if (storedHighScores) {
        highScores = JSON.parse(storedHighScores);
    }

    // Reset timer and currentQuestionIndex
    timeLeft = 30;
    timerElement.textContent = timeLeft;
    currentQuestionIndex = 0;
    total = 0;


    nextQuestion();
    startTimer();
}

// Timer function 
function startTimer() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <=0) {
            endQuiz();
        }
    }, 1000);
}

// function to display next questions 
function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
        questionTextElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";

        // display answers
        currentQuestion.choices.forEach((choice, index) => {
            var choiceButton = document.createElement("button"); 
            choiceButton.textContent = choice; 
            choiceButton.addEventListener("click", () => {
                if (index === currentQuestion.correctAnswer) {
                    currentQuestionIndex++; // move to next question, if answer is correct
                    nextQuestion();
                } else {
                    timeLeft -= 10; // subtract 10 seconds if answer is incorrect
                }
            });
            choicesElement.appendChild(choiceButton);
        });
    } else {
        endQuiz();
    }
}

// function to end quiz 
function endQuiz() {
    clearInterval(timerInterval);
    endOfQuizElement.removeAttribute("class");
    finalScoreElement.textContent = timeLeft;
    questionsContainer.setAttribute("class", "hidden");
}

// function to submitScore 
function submitScore() {
    var initials = document.getElementById("initials-input");
    var score = timeLeft;

    if (initials) {
        var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
        var scoreData = {initials: initials, score: score };
        highScores.push(scoreData);
        highScores.sort((a, b) => b.score - a.score);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.href = "highscores.html";
    }
}
// Event listener
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitScore);

