const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') // c is the context

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0,0,canvas.width,canvas.height)