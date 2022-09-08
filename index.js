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
		c.drawImage(this.image, this.position.x, this.position.y);
	}
}

const background = new Sprite({
	position: {
		x: 60,
		y: 0,
	},image:image
});

const keys = {
	w : {
		pressed: false
	},
	a:{
		pressed:false
	},
	s:{
		pressed:false
	},
	d:{
		pressed:false
	},
	jump:{
		pressed:false
	}
}

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

	if(keys.w.pressed){
		background.position.y=background.position.y-3;
	}
}
animate();

// Listen for key press
window.addEventListener("keydown", (e) => {
	// e stands for event
	// console.log(e.key);
	switch (e.key) {
		case "w":
			// console.log("w");
			keys.w.pressed = true;
			break;
		case "a":
			// console.log("a");
			keys.a.pressed= true;
			break;
		case "s":
			// console.log("s");
			keys.s.pressed = true;
			break;
		case "d":
			// console.log("d");
			keys.d.pressed = true;
			break;
		case " ":
			// console.log("jump");
			keys.jump.pressed = true;
			break;
		default:
			break;
	}
});

window.addEventListener("keyup", (e) => {
	// e stands for event
	// console.log(e.key);
	switch (e.key) {
		case "w":
			console.log("w key up");
			keys.w.pressed = false;
			break;
		case "a":
			// console.log("a");
			keys.a.pressed= false;
			break;
		case "s":
			// console.log("s");
			keys.s.pressed = false;
			break;
		case "d":
			// console.log("d");
			keys.d.pressed = false;
			break;
		case " ":
			// console.log("jump");
			keys.jump.pressed = false;
			break;
		default:
			break;
	}
});
