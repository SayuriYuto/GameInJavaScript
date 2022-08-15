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
playerimg.src = "img/KingHuman/Idle (78x58).png";

// when image loads then only call the drawImage function
// image view level set to 300% in Tiled
image.onload = () => {
	c.drawImage(image, 60, 0);
	// player load should be after map
	c.drawImage(playerimg, canvas.width / 2 - 100, canvas.height / 2 + 103);
}

