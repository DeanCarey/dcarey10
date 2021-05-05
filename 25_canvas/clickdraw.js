// Dean Carey & Alvin Wu
// SoftDev pd1
// K25 -- Canvas Based JS Drawing
// 2021-05-04


var c = document.getElementById("slate"); //fetch empty canvas
var ctx = c.getContext("2d"); //drawing in a 2d canvas
var pos = {x:0,y:0};
var state = 0; //0 is dot, 1 is box

function changeState()
	{
	if (state == 0)
		{state = 1; document.getElementById('drawtype').innerHTML = "Current Type: Box";} //changes state to box if set to dot
	else
		{state = 0; document.getElementById('drawtype').innerHTML = "Current Type: Dot";} //changes state to dot if set to box
	}

	// `e.offsetX` returns horizontal distance from mouse to x-coord of target element
    	// `e.offsetY` returns vertical distance from mouse to y-coord of target element


function drawDot(e)
	{
	ctx.fillStyle = "#000000";
	ctx.fillRect(e.offsetX, e.offsetY, 4, 4); //very small square, appears like dot
	ctx.stroke();
	}

function drawrect(e)
	{
	ctx.fillStyle = "#000000"; //black
	ctx.beginPath(); //starts new path, wipes old paths from record
	ctx.rect(e.offsetX, e.offsetY, 100, 100); //100 x 100 square centered at mouse click
	ctx.stroke(); //finalizes path and draws
	}

function draw(event)
	{
	if (state == 0)
		{drawDot(event)}
	if (state == 1)
		{drawrect(event)}
	}

function clearcanv()
	{ctx.clearRect(0,0,c.width,c.height);} //clears all drawing within the canvas

function returnState()
	{return state}
