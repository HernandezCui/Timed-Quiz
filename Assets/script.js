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
// var initialsInput = document.getElementById("initials-input");
var submitButton = document.getElementById("submit-button");
var finalScoreElement = document.getElementById("final-score");
// var quizTitle = document.getElementById("quiz-title");
// var quizDescription = document.getElementById("quiz-description");

// start quiz 
function startQuiz() {
    startButton.style.display = "none";
    // quizTitle.style.display = "none";
    // quizDescription.style.display = "none";
    var landingScreen = document.getElementById("start-quiz");
    landingScreen.setAttribute("class", "hide");
    questionsContainer.classList.remove("hidden");
    endOfQuizElement.classList.add("hidden");

    // Reset timer and currentQuestionIndex
    timeLeft = 30;
    timerElement.textContent = timeLeft;
    currentQuestionIndex = 0;


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
    questionsContainer.classList.add("hidden");
    endOfQuizElement.classList.remove("hidden");
    finalScoreElement.textContent = timeLeft;
}


// Highscores function & viewing previous high scores
let highScores = [];

function saveScore() {
    var initials = document.getElementById("initials-input");
    var score = finalScoreElement; 

// new object to represent the score
    if (initials && score) {
        var newScore = {
            initials: initials,
            score: score
        };
        highScores.push(newScore);
        localStorage.setItem("highScores", JSON.stringify(highScores));
    }
}


// Event listener
startButton.addEventListener("click", startQuiz);

// save score when entering initials
initials.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        saveScore();
    }
});

// load high scores from storage





// // Save score with username
// function saveHighScore () {
//     var initials = initialsInput.value.trim();
//     if (initials !== "") {
//         var highScores = 
//             JSON.parse(window.localStorage.getItem("highScores")) || [];
//         var newScore = {
//             score: timeLeft,
//             name: initials,
//         };
//         highScores.push(newScore);
//         window.localStorage.setItem("highScores", JSON.stringify(highScores));
//     }
// }

// // save score when entering initials
// function checkForEnter(event) {
//     if (event.key === "Enter") {
//         saveHighScore();
//     }
// }

// Event listeners
// startButton.addEventListener("click", startQuiz);
// submitButton.addEventListener("click", saveHighScore);
// initialsInput.addEventListener("keyup", checkForEnter);



// High scores html screen elements

// var scoresBtn = document.querySelector("#view-high-scores");

// function getHighScores () {
//     var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
//     highScores.sort(function(a, b) {
//         return b.score - a.score;
//     });
//     highScores.forEach(function(score) {
//         var list = document.createElement("li");
//         list.textContent = score.initials + "-" + score.timeLeft;
//         var orderList = document.getElementById("highScores");
//         orderList.appendChild(list);
//     });
// }

// // clear previous scores 
// function clearHighScores() {
//     window.localStorage.removeItem("highScores");
//     window.location.reload();
//     document.getElementById("clear").onclick = clearHighScores;
// }

// printHighScores(); 