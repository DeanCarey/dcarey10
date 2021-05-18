//Team Worm Ooga - Team Worm Ooga - Dean Carey, Ethan Machleder, Jeffrey Huang
//SoftDev
//K30: JSorcery
//2021-05-14

//access canvas and buttons via DOM
var c =  document.getElementById("playground")// GET CANVAS
var startButton = document.getElementById("buttonStart") // GET START BUTTON
var stopButton = document.getElementById("buttonStop") // GET STOP BUTTON
var restartButton = document.getElementById("buttonRestart") // GET RESTART BUTTON
var ctx = c.getContext("2d");// YOUR CODE HERE

stopButton.disabled = true;
restartButton.disabled = true;

var loc = [500,500]; //location of snake head
var goal = [100,100]; //location of apple
var mv = [50,0]; //velocity
var counter = 0;

var snake = new Image();
snake.src = "snake.jpg";
snake.onload = function(){ctx.drawImage(snake,loc[0],loc[1],50,50)};

var apple = new Image();
apple.src = "apple.jpg";
apple.onload = function(){ctx.drawImage(apple,goal[0],goal[1],50,50)};

var run = true;

var appleIt = () => {
  goal[0] = Math.floor(Math.random() * 10) * 100;
  goal[1] = Math.floor(Math.random() * 10) * 100;
  if (loc[0] == goal[0] && loc[1] == goal[1]) {
    appleIt();
    return;
  }
  ctx.drawImage(apple,goal[0],goal[1],50,50);
}

var runIt = () => {
  if (run) {
    console.log("run invoked...")
    startButton.disabled = true;
    stopButton.disabled = false;
    restartButton.disabled = false;
    if (loc[0] < 0 || loc[0] > 950 || loc[1] < 0 || loc[1] > 950) {
      alert("You Died, Your Score Was: " + counter);
      restart();
      return;
    }
    if (loc[0] == goal[0] && loc[1] == goal[1]) {
      appleIt();
      counter+=1;
    }
    setTimeout(function() {
      ctx.clearRect(loc[0],loc[1],50,50); // clears previous snake head
      loc = [loc[0]+mv[0],loc[1]+mv[1]]; // moving based on arrow press
      ctx.drawImage(snake,loc[0],loc[1],50,50);
      requestID = window.requestAnimationFrame(runIt);
    }, 800);
  }
}


document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') { // up arrow
      console.log("up...")
      mv = [0,-50];
      runIt;
    }
    else if (e.keyCode == '40') { // down arrow
      console.log("down...")
      mv = [0,50];
      runIt;
    }
    else if (e.keyCode == '37') { // left arrow
      console.log("left...")
      mv = [-50,0];
      runIt;
    }
    else if (e.keyCode == '39') { // right arrow
      console.log("right...")
      mv = [50,0];
      runIt;
    }
}

var stopIt = () => {
    console.log("stopIt invoked...")
    console.log(requestID);
    startButton.disabled = false;
    stopButton.disabled = true;
    window.cancelAnimationFrame(requestID);
    run = false;
}

var restart = () => {
    console.log("restart invoked...")
    run = false;
    counter = 0;
    ctx.clearRect(0,0,1000,1000);
    ctx.drawImage(snake,500,500,50,50);
    ctx.drawImage(apple,100,100,50,50);
    loc = [500,500];
    goal = [100,100];
    mv = [50,0]
    startButton.disabled = false;
    stopButton.disabled = true;
    restartButton.disabled = true;
}

document.getElementById('buttonStart').onclick = function() {
  run = true;
}

startButton.addEventListener( "click", runIt);
stopButton.addEventListener( "click", stopIt);
restartButton.addEventListener( "click", restart);
