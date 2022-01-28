var canvas=document.querySelector("canvas")
var c=canvas.getContext("2d")

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

mouse={
    x: undefined,
    y: undefined
}

colorArray=[
    '#2E333D',
    '#07AED7',
    '#F58167',
    '#FB404D',
    '#F3F5F1'
]

window.addEventListener('mousemove',function(event) {
    mouse.x=event.x
    mouse.y=event.y
})

addEventListener('resize',function() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
})

function randomInt(start,end) {
    return Math.random()*end+start;
}
