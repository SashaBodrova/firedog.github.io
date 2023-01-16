const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')
console.log(ctx)

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = 'img/shadow_dog.png'


function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // ctx.fillRect(50, 50, 100, 100)

  // 1 - image, 2 - X coord, 3 - Y coord, 4 - width, 5 - height
  ctx.drawImage(playerImage, 0, 0)

  requestAnimationFrame(animate)
}

animate()