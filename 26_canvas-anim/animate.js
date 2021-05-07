// Alvin Wu and Dean Carey
// SoftDev pd1
// K26 -- canvas based JS animation
// 2021-05-05

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "red";

var requestID;  //init global var for use with animation frames

var radius = 0;
var growing = true;

//THE CIRCLE 
var drawDot = () => {
  console.log("drawDot invoked...")
  dotButton.removeEventListener("click", drawDot); //Removes ability to click button again once it's already in motion
  if (growing) //Grow circle
	{
	if (radius < Math.min(c.width / 2,c.height / 2)) //Grow until circle reaches canvas size
		{
		ctx.clearRect(0,0,c.width,c.height); //Clear canvas
		ctx.beginPath();
		ctx.arc(c.width / 2,c.height / 2,radius,0,Math.PI * 2); //Circle with new radius
		ctx.stroke();
		ctx.fill();
		radius ++;
		}
	else
		{growing = false;} //Set growing to false once circle has reached canvas size
	}
   if (!growing) //Shrink circle
	{
	if (radius > 0) //Shrink until radius is 0
		{
		ctx.clearRect(0,0,c.width,c.height); //Clear canvas
		ctx.beginPath();
		ctx.arc(c.width / 2,c.height / 2,radius,0,Math.PI * 2); //Circle with new radius
		ctx.stroke();
		ctx.fill();
		radius --;
		}
	else
		{growing = true;} //Set growing to true once circle has reached smallest size
	}
	requestID = window.requestAnimationFrame(drawDot); //Render next animation frame (?)
};

//STOP IT, GET SOME HELP
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID); //Cancels the current frame
  dotButton.addEventListener( "click", drawDot ); //Allows user to click button again
};

//Buttons
dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
