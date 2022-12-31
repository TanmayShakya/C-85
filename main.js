//Create a reference for canvas 
canvas = document.getElementById(myCanvas);
ctx = canvas.getContext("2d")
//Give specific height and width to the car image
greencar_height = 100;
greencar_width = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 2;
greencar_y = 225;
function add() {
	//upload car, and background images on the canvas.
	background_image = new Image()
	background_image.onload = uploadBackground;
	background_image.src = background_image;

	greencar_image = new Image()
	greeencar_image.onload = uploadgreencar;
	greencar_image.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
      ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(greeencar_image,greencar_x,greencar_y,greencar_width,greencar_height)

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if(greencar_y>='0') {
		greencar_y = greencar_y-10;
		console.log("When up arrow is pressed"+ greencar_x + "y = " + greencar_y);
		uploadgreencar;
		uploadBackground;
	}
}

function down() {
	if (greencar_y <= 500)
	greencar_y = greencar_y + 10;
	console.log("when down arrow is pressed" + greencar_x + "y =" + greencar_x);
	uploadBackground;
	uploadgreencar;
	//Define function to move the car downward
}

function left() {
	//Define function to move the car left side
}

function right() {
	//Define function to move the car right side
}
