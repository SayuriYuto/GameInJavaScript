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

const playerwidth = ((playerimg.width/11)/1.5)-10;
const playerheight = ((playerimg.height)/1.5)-10;
// when image loads then only call the drawImage function
// image view level set to 300% in Tiled
image.onload = () => {
	c.drawImage(image, 60, 0);
	// player load should be after map
	c.drawImage(
		playerimg,
		0,
		0,
		playerimg.width/11,
		playerimg.height,
		(canvas.width / 2) - 150,
		(canvas.height / 2) + 67,
        playerwidth,
		playerheight
	);
}
