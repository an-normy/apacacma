
var canvas = new fabric.Canvas('myCanvas')
 blockY= 150;
 blockX= 50;

var blockImageWidth = 150;
var blockImageHeight = 150;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img){
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:blockY,
	left:blockX
	});
	canvas.add(blockImageObject);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '80') // adicione os códigos adequados às teclas
	{
		newImage("pac.png")
		console.log("P")
	}
	if(keyPressed == '66')
	{
		blockX = 200;
		newImage("R3D.png")
		console.log("B")
	}
	
	if(keyPressed == '83')
	{
		blockX =350;
		newImage("pink.png")
		console.log("S")
	}
	if(keyPressed == '73')
	{
		blockX = 500;
		newImage("blu.png")
		console.log("I")
	}
	if(keyPressed == '67')
	{
		blockX = 650;
		newImage("orang.png")
		console.log("c")
	}
	
}

