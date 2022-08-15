const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') // c is the context for canvas

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0,0,canvas.width,canvas.height)

// create html image object to add images from Js
const image = new Image();
image.src = './Kings and Pigs/Tiledset/IntroMapView.png'

// when image loads then only call the drawImage function
// image view level set to 300% in Tiled
image.onload = () => {
    c.drawImage(image,0,0)
}