const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); // c is the context for canvas

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

// create html image object to add images from Js
const image = new Image();
image.src = "./img/map/IntroMapView.png";

const playerimg = new Image();
playerimg.src = "./img/KingHuman/Idlecropped.png";

const playerwidth = playerimg.width / 11 / 1.5 - 10;
const playerheight = playerimg.height / 1.5 - 10;
// when image loads then only call the drawImage function
// image view level set to 300% in Tiled
image.onload = () => {};

class Sprite {
	constructor({ position, velocity, image }) {
		this.position = position;
		// this.velocity = velocity;
		this.image = image
	}

	draw(){
		c.drawImage(this.image, 60, 0);
	}
}

const background = new Sprite({
	position: {
		x: 60,
		y: 0,
	},image:image
});

function animate() {
	window.requestAnimationFrame(animate);
	// console.log('animate')
	background.draw()
	// player load should be after map
	c.drawImage(
		playerimg,
		0,
		0,
		playerimg.width / 11,
		playerimg.height,
		canvas.width / 2 - 150,
		canvas.height / 2 + 67,
		playerwidth,
		playerheight
	);

	if()
}
animate();

// Listen for key press
window.addEventListener("keydown", (e) => {
	// e stands for event
	// console.log(e.key);
	switch (e.key) {
		case "w":
			console.log("w");
			break;
		case "a":
			console.log("a");
			break;
		case "s":
			console.log("s");
			break;
		case "d":
			console.log("d");
			break;
		case " ":
			console.log("jump");
			break;
		default:
			break;
	}
});
