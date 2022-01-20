// use an image for the player
// preload the image -> in preload -> loadImage
// draw that image using image()
let playerImage;
let playerX = 100;
// this preloads all the assets
function preload() {
	playerImage = loadImage('gustavo.png')
}

// this creates the html element canvas that we can draw into
function setup() {
	console.log('setup')
	createCanvas(1000, 600)
}
// let heightRect = 200
let x = 400
let speed = 2
function draw() {
	// console.log('i am drawing 🌈')
	// this draws a rectangle - x, y, width, height
	// height - is a variable set by P5 which holds the height of the canvas
	// let rectColor = color(0, 255, 0)
	// fill('blue')
	// stroke('blue')
	// rect(0, height - 200, 100, 200)

	// fill('red')
	// rect(300, height - 200, 100, 200)

	// draw a line line(startX, startY, endX, endY) 
	// stroke(rectColor)
	// line(0, 50, 1000, 50)
	// clear()
	// if () {
	// 	// change the direction

	// }
	// x += speed
	// if (x > 1000 - 25) {
	// 	speed = - 2
	// }
	// circle(x, 50, 50)
	// circle(mouseX, mouseY, 50)
	// this is provided by p5 too
	// console.log(mouseX, mouseY)

	clear()
	// render the image -> image, x, y, width, height
	image(playerImage, playerX, 100, 100, 100)
}

function keyPressed() {
	// https://keycode.info
	// console.log('key pressed')
	// we can access the variable 'keyCode' 
	console.log(keyCode)
	if (keyCode === 39) {
		// move the player to the right
		playerX += 10
	}
	// check here for the other keyCodes
}