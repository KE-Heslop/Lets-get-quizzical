
var timerElement = document.getElementById("timer");
var startScreen = document.getElementById("start-screen");
var startBtn = document.getElementById("start");

// to start the quiz
function startQuiz() {
// Starts at 75 seconds
    time = 75;
// Sets question index to 0
    currentQuestionIndex = 0;
// removes the start page
    startScreen.setAttribute("style", "display: none");
 // timer 
    timerElement.setAttribute("style", "display: inline-block");
// gets the timer counting down in secs
    timerId = setInterval(function () {
      clockTick()
    }, 1000);
// Sets the text of the timer to the time as time updates
    timerElement.textContent = time;
    getQuestion();
  }
  
 
  // for quiz to stop when time =0
  function clockTick() {
    time--;
    timerElement.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }