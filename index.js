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


function drawCircle(el) {
    var pos = getPosition()
    ctx.beginPath();
    console.log(pos.x)
    ctx.arc(pos.x, pos.y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

document.addEventListener("click", drawCircle);