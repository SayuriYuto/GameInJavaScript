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

class SpritePlayer {
	constructor({position,velocity,image}){
		this.position = position;
		this.image = playerimg;
	}
	draw(){
		c.drawImage(this.image,0,0,playerimg.width / 11,
		playerimg.height,this.position.x,this.position.y,playerwidth,
		playerheight)
	}
}

const background = new Sprite({
	position: {
		x: 60,
		y: 0,
	},image:image
});

const player = new SpritePlayer({
	position:{
		x : canvas.width / 2 - 150,
		y : canvas.height / 2 + 67,
	}
})

const keys = {
	a:{
		pressed:false //Left
	},
	d:{
		pressed:false // Right
	},
	space:{
		pressed:false // jump
	}
}

function animate() {
	window.requestAnimationFrame(animate);
	background.draw() // unnessasary but fine
	// player load should be after map
	player.draw();

	if(keys.space.pressed){
		player.position.y=player.position.y-3;
	}
	if(keys.a.pressed){
		player.position.x=player.position.x-3;
	}
	if(keys.d.pressed){
		player.position.x=player.position.x+3;
	}
}
animate();

// Listen for key press
window.addEventListener("keydown", (e) => {
	// e stands for event
	switch (e.key) {
		case "a":
			keys.a.pressed= true;
			break;
		case "d":
			keys.d.pressed = true;
			break;
		case " ":
			keys.space.pressed = true;
			break;
		default:
			break;
	}
});

window.addEventListener("keyup", (e) => {
	// e stands for event
	switch (e.key) {
		// case "w":
		// 	console.log("w key up");
		// 	keys.w.pressed = false;
		// 	break;
		case "a":
			keys.a.pressed= false;
			break;
		// case "s":
		// 	keys.s.pressed = false;
		// 	break;
		case "d":
			keys.d.pressed = false;
			break;
		case " ":
			keys.space.pressed = false;
			break;
		default:
			break;
	}
});
