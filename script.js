var startBtn = document.querySelector(".start-btn button");
var quizPage = document.querySelector(".quiz-page");

// creating a list of questions as an array

// if Start Button clicked
startBtn.onclick = () => {
    quizPage.classList.add("clicked");
    console.log("Start clicked")
}
