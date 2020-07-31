var c = document.getElementById("myCanvas");

c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");

function getPosition() {

    return {
        x: event.clientX,
        y: event.clientY

    };
}

function distance(circle1, circle2) {
    d = Math.sqrt(Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2))
    return d
}

var circles = []

function drawCircle(el) {
    var pos = getPosition()
    var canDraw = true;
    for (let i = 0; i < circles.length; i++) {
        if (!(distance(circles[i], pos) > 60)) canDraw = false;
    }

    if (canDraw) {
        ctx.beginPath();
        console.log(pos.x)
        ctx.arc(pos.x, pos.y, 30, 0, 2 * Math.PI);
        ctx.stroke();
        circles.push(pos)
    }

}

document.addEventListener("click", drawCircle);