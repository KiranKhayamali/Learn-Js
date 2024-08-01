const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () =>{
    	canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
});

function random(number){
    return Math.floor(Math.random() * number);
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i<100 ; i++){
        ctx.beginPath();
        ctx.fillStyle = "rgb(0 150 255 / 50%)";
        ctx.arc(
            random(canvas.width), //width of bubbles or circles
            random(canvas.height), //height of bubbles or circle
            random(50), //number of circle generated
            0,
            2 * Math.PI,
        );
        ctx.fill();
    }
}

btn.addEventListener("click", draw);