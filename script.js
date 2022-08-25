var startBtn = document.querySelector(".start-btn button");
var quizPage = document.querySelector(".quiz-page");

// creating a list of questions as an array


var questions = [
    {
        num: 1,
        questionText:"Inside which HTML element do we put the JavaScript?",
        correct:"<script>",
        answers: [
            "<scripting>",
            "<script>",
            "<javascript >",
            "<js>"
        ]
    },
    {
        num: 2,
        questionText:"Where is the correct place to insert a JavaScript?",
        correct:"Both the <body> section and the <head> section are correct ",
        answers: [
            "The <body> section",
            "The <header> section",
            "The <head> section",
            "Both the <body> section and the <head> section are correct "
        ]
    },

    {
        num: 3,
        questionText:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        correct:"<script scr = “xxx.js>",
        answers: [
            "<script name = “xxx.js>",
            "<script href = “xxx.js>",
            "<script scr = “xxx.js>",
            "<script img = “xxx.js>"
        ]
    },

    {
        num: 4,
        questionText:"How do you write 'Hello World' in an alert box?",
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
        questionText:"How do you create a function in JavaScript?",
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
        questionText:"How do you call a function named 'myFunction'?",
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
        questionText:"How to write an IF statement in JavaScript?",
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
        questionText:"How does a WHILE loop start?",
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
        questionText:"How does a FOR loop start?",
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
        questionText:"How can you add a comment in a JavaScript?",
        correct:"// This is a comment ",
        answers: [
            "<!-- This is a comment -->",
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


