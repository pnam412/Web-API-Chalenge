var timeEl=document.getElementById("timer");
var startEl=document.getElementById("startButton");
var startScreenEl=document.getElementById("start-screen");
var codingQuizEl=document.getElementById("coding-quiz");

function startquiz (){
    startScreenEl.style.display="none";
    codingQuizEl.style.display="block";
   startTimer();
}
function startTimer () {
    console.log("startTimer");
}

function endQuiz () {
    console.log("endQuiz");

startEl.addEventListener("click", startquiz)
}
