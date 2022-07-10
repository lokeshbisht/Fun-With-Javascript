const canvas = document.getElementById("myCanvas")

canvas.width = window.innerWidth - 100
canvas.height = window.innerHeight - 100

const context = canvas.getContext("2d")

let size = 10

let colors = ["red", "green", "blue", "cyan", "teal", "yellow"]

context.fillRect(25, 25, canvas.width, canvas.height)

function draw() {
    for (var i = 50; i < canvas.width - 35; i += size) {
        for (var j = 50; j < canvas.height - 35; j += size) {

            let index = Math.floor(Math.random() * colors.length) // random value between 0 and 5
            context.fillStyle = colors[index]
            context.fillRect(i, j, size, size)
        }
    }
}

setInterval(draw, 5)