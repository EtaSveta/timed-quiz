var startBtn = document.querySelector(".start-btn button");
var quizPage = document.querySelector(".quiz-page");

// creating a list of questions as an array


var questions = [
    {
        num: 1,
        questionText:"1. Inside which HTML element do we put the JavaScript?",
        correct:"&lt;script&gt",
        answers: [
            "&lt;scripting&gt",
            "&lt;script&gt",
            "&lt;javascript&gt",
            "&lt;js&gt"
        ]
    },
    {
        num: 2,
        questionText:"2. Where is the correct place to insert a JavaScript?",
        correct:"Both the <body> section and the <head> section are correct ",
        answers: [
            "The &lt;body&gt section",
            "The &lt;header&gt section",
            "The &lt;head&gt section",
            "Both the &lt;body&gt section and the <head> section are correct "
        ]
    },

    {
        num: 3,
        questionText:"3. What is the correct syntax for referring to an external script called 'xxx.js'?",
        correct:"<script scr = “xxx.js>",
        answers: [
            "&lt;script name = “xxx.js>",
            "&lt;script href = “xxx.js>",
            "&lt;script scr = “xxx.js>",
            "&lt;script img = “xxx.js>"
        ]
    },

    {
        num: 4,
        questionText:"4. How do you write 'Hello World' in an alert box?",
        correct:"alert(“Hello World!”);",
        answers: [
            "msg(“Hello World!”);",
            "alert(“Hello World!”);",
            "alertBox(“Hello World!”);",
            "msgBox(“Hello World!”);"
        ]
    },

    {
        num: 5,
        questionText:"5. How do you create a function in JavaScript?",
        correct:"function myFunction(); ",
        answers: [
            "function myFunction(); ",
            "function = myFunction();",
            "function: myFunction();",
            "function !myFunction;"
        ]
    },

    {
        num: 6,
        questionText:"6. How do you call a function named 'myFunction'?",
        correct:"myFunction();",
        answers: [
            "call myFunction(); ",
            "call function myFunction();",
            "myFunction();",
            "hello myFunction();"
        ]
    },

    {
        num: 7,
        questionText:"7. How to write an IF statement in JavaScript?",
        correct:"if (i == 5)",
        answers: [
            "if (i == 5)",
            "if i == 5 then",
            "if i = 5",
            "if i = 5 then"
        ]
    },

    {
        num: 8,
        questionText:"8. How does a WHILE loop start?",
        correct:"while (i <=10)",
        answers: [
            "while i = 1 to 10",
            "while (i <=10)",
            "while (i <=10; i++)",
            "while i less than 10"
        ]
    },

    {
        num: 9,
        questionText:"9. How does a FOR loop start?",
        correct:"for (i <=5; i++)",
        answers: [
            "for i = 1 to 5",
            "for (i <=5; i++)",
            "for (i <=5; i++)",
            "for (i = 0; i <=5)"
        ]
    },

    {
        num: 10,
        questionText:"10. How can you add a comment in a JavaScript?",
        correct:"// This is a comment ",
        answers: [
            "&lt;!-- This is a comment -->",
            "// This is a comment ",
            "“This is a comment",
            "‘This is a comment’"
        ]
    },

]

// if Start Button clicked
var StartQuiz = function (event) {
    quizPage.classList.add("clicked");
}

startBtn.addEventListener("click", StartQuiz); 
showQstn(0);


var questionCount = 0;

// function showing questions 
function showQstn(index) {
    var question = document.querySelector(".question");
    var questionTag = "<span>" + questions[index].questionText + "</span>";
    question.innerHTML = questionTag;
        
    var ansList = document.querySelector(".answers");
    var ansListTag = '<div class="options">' + questions[index].answers[0] + '<span></span></div>'
                    + '<div class="options">'+ questions[index].answers[1] + '<span></span></div>'
                    + '<div class="options">'+ questions[index].answers[2] + '<span></span></div>'
                    + '<div class="options">'+ questions[index].answers[3] + '<span></span></div>';
    ansList.innerHTML = ansListTag;  
}


    var optns = document.querySelector(".options");
    optns.addEventListener('click', (event) => {
        console.log("hi");
    questionCount++;
    showQstn(questionCount);
    console.log(questionCount);

    });


    



