// Team DVD (Victoria Gao, Dean Carey)
// SoftDev pd0
// K27 -- canvas based JS animation
// 2021-05-07w

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "buttonCircle" );
var stopButton = document.getElementById( "buttonStop" );
var waitButton = document.getElementById("dvd");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#00ffff";

var requestID;

//var clear = function(e) {
var clear = (e) => {
  e.preventDefault();
  ctx.clearRect(0, 0, 500, 500);
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")

  window.cancelAnimationFrame( requestID );

  ctx.clearRect( 0, 0, c.width, c.height );

  if ( growing ) {
    radius += 1;
  }
  else {
    radius -= 1;
  }

  if ( radius == (c.width / 2) )
    growing = false;
  else if ( radius == 0 ) {
    growing = true;
  }

  //draw the dot
  ctx.beginPath();
  ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
  ctx.stroke();
  ctx.fill();

  requestID = window.requestAnimationFrame( drawDot );
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame( requestID );
};

var logo = new Image();
logo.src = "logo_dvd.jpg";
//starting position of disc is (0,250)
var x = 0;
var y = 250;
//initialize dx and dy
var dx = 1;
var dy = 1;
var bounceDVD = () => {
  console.log("bounceDVD invoked...");
  window.cancelAnimationFrame( requestID );
  ctx.clearRect(0,0,500,500);
  ctx.drawImage(logo,dx+x,dy+y,100,80);
  requestID = window.requestAnimationFrame( bounceDVD );
  x += dx;
  y += dy;
  //if disc hits top or bottom border, reverse direction of change in y 
  if (y == 440 || y == -20) {
    dy *= -1;
  }

  //if disc hits left or right border, reverse direction of change in x
  if (x == 410 || x == -10) {
    dx *= -1;
  }

}

dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
waitButton.addEventListener( "click", bounceDVD);