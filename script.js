var startBtn = document.querySelector(".start-btn button");
var startBtnContainer = document.querySelector(".start-btn");
var quizPage = document.querySelector(".quiz-page");
var secondsCount = document.querySelector(".time-sec");
var results = document.querySelector(".results")
var submitBtn = document.querySelector("#submit");
var highScores = document.querySelector(".high-scores");
var savedScores = document.querySelector(".saved-scores");
var resultsForm = document.querySelector("#results-form");
var clearScoresBtn = document.querySelector("#clear-scores");
var startOverBtn = document.querySelector("#start-over-btn");

// creating a list of questions as an array
var questions = [
    {
        num: 1,
        questionText: "1. Inside which HTML element do we put the JavaScript?",
        correct: "script",
        answers: [
            "scripting",
            "script",
            "javascript",
            "js"
        ]
    },
    {
        num: 2,
        questionText: "2. Where is the correct place to insert a JavaScript?",
        correct: "Both the <body> section and the <head> section are correct",
        answers: [
            "The &lt;body&gt section",
            "The &lt;header&gt section",
            "The &lt;head&gt section",
            "Both the &lt;body&gt section and the &lt;head&gt section are correct"
        ]
    },

    {
        num: 3,
        questionText: "3. What is the correct syntax for referring to an external script called 'xxx.js'?",
        correct: "<script scr = 'xxx.js'>",
        answers: [
            "&lt;script name = 'xxx.js'&gt",
            "&lt;script href = 'xxx.js'&gt",
            "&lt;script scr = 'xxx.js'&gt",
            "&lt;script img = 'xxx.js'&gt"
        ]
    },

    {
        num: 4,
        questionText: "4. How do you write 'Hello World' in an alert box?",
        correct: "alert(“Hello World!”);",
        answers: [
            "msg(“Hello World!”);",
            "alert(“Hello World!”);",
            "alertBox(“Hello World!”);",
            "msgBox(“Hello World!”);"
        ]
    },

    {
        num: 5,
        questionText: "5. How do you create a function in JavaScript?",
        correct: "function myFunction(); ",
        answers: [
            "function myFunction(); ",
            "function = myFunction();",
            "function: myFunction();",
            "function !myFunction;"
        ]
    },

    {
        num: 6,
        questionText: "6. How do you call a function named 'myFunction'?",
        correct: "myFunction();",
        answers: [
            "call myFunction(); ",
            "call function myFunction();",
            "myFunction();",
            "hello myFunction();"
        ]
    },

    {
        num: 7,
        questionText: "7. How to write an IF statement in JavaScript?",
        correct: "if (i == 5)",
        answers: [
            "if (i == 5)",
            "if i == 5 then",
            "if i = 5",
            "if i = 5 then"
        ]
    },

    {
        num: 8,
        questionText: "8. How does a WHILE loop start?",
        correct: "while (i <=10)",
        answers: [
            "while i = 1 to 10",
            "while (i <=10)",
            "while (i <=10; i++)",
            "while i less than 10"
        ]
    },
]

var seconds = 60;
var userTime;

// if Start Button clicked
var StartQuiz = function (event) {
    quizPage.classList.add("clicked");
    startBtnContainer.classList.add("clicked");
    showQstn(0);
    startTime(seconds);
}

// start button even listener
startBtn.addEventListener("click", StartQuiz);


var questionCount = 0;
var counter;

// function showing questions 
function showQstn(index) {
    var question = document.querySelector(".question");
    var questionTag = "<span>" + questions[index].questionText + "</span>";
    question.innerHTML = questionTag;

    var ansList = document.querySelector(".answers");
    var ansListTag = '<div class="options">' + questions[index].answers[0] + '<span></span></div>'
        + '<div class="options">' + questions[index].answers[1] + '<span></span></div>'
        + '<div class="options">' + questions[index].answers[2] + '<span></span></div>'
        + '<div class="options">' + questions[index].answers[3] + '<span></span></div>';
    ansList.innerHTML = ansListTag;

    addListeners();
}

//going through array of questions
function addListeners() {
    var optns = document.querySelectorAll(".options");
    for (var i = 0; i < optns.length; i++) {
        optns[i].setAttribute("onclick", "optionSelected(this)")
    };
    optns.forEach(options => {
        options.addEventListener('click', function handleClick(event) {
            if (questionCount > 6) {
                showResults();
                userTime = seconds;
                clearInterval(counter);
                console.log(userTime);
            }
            else {
                questionCount++;
                showQstn(questionCount);
                console.log(questionCount);
            }
        });
    });
};

// if user selects correct or incorrect answer
function optionSelected(answr) {
    userAnswr = answr.textContent;
    var correctAnswr = questions[questionCount].correct;

    if (userAnswr == correctAnswr) {
        console.log("answer is correct");
    }
    else {
        secondsCount.textContent = seconds;
        seconds = seconds - 10;
        console.log("answer is wrong");
        if (seconds <= 0) {
            showResults()
            clearInterval(counter)
        }
    }
};

//start and stop timer
function startTime() {
    counter = setInterval(timer, 1000);
    function timer() {
        if (seconds < 1) {
            showResults();
            clearInterval(counter);
        }
        else {
            secondsCount.textContent = seconds;
            seconds--;
        }
    }
};

// showing user their quiz result
function showResults() {
    quizPage.style.display = "none";
    results.classList.add("clicked");
    var finalScore = results.querySelector(".final-score");

    var scoreTag = "<span>Your final score is <p>" + seconds + "</p></span>";
    finalScore.innerHTML = scoreTag;

};


console.log(localStorage.getItem('savedScores'))

//once Sumbit Initials button clicked it is stored in local storage
function submitResults (event) {
    event.preventDefault();
    storeResults();
};

// once user clickes "Submit Results" a list of all saved scores displays on screen
var loadScores = function () {
    results.classList.remove("clicked");
    highScores.classList.add("clicked");

    var displayScores = localStorage.getItem("savedScores");
    console.log("saved scores found");

    var scoresOnScreen = JSON.parse(displayScores);
    console.log(scoresOnScreen);
    scoresOnScreen.forEach(score => {
        var li = document.createElement("li");
        li.className = "saved-initials";
        li.textContent = score.name + "   " + score.type;
        savedScores.append(li);
    });
};

//function to save results to local storage
function storeResults() {
    var initialsInput = document.querySelector("input[name='initials']").value;
    if (!initialsInput || initialsInput.length <= 1) {
        alert('need at least 2 initials')
        return;
    }
    var savedObject = {
        name: initialsInput,
        type: seconds 
    }

    if (localStorage.getItem("savedScores")) {
        var localScores = JSON.parse(localStorage.getItem("savedScores"));
    }
    else {
        var localScores = [];
    }
    localScores.push(savedObject);
    localStorage.setItem("savedScores", JSON.stringify(localScores));

    loadScores();
}

// function to clear all saved scores
function clearScores() {
    localStorage.clear();
    
    var savedEl = document.querySelector(".saved-scores")
    while(savedEl.firstChild) {
        savedEl.removeChild(savedEl.firstChild);
    }
    
}

clearScoresBtn.addEventListener("click", clearScores);

resultsForm.addEventListener("submit", submitResults);




