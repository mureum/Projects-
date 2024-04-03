const canvas = document.getElementById("canvas");
const body = document.querySelector('body');
const eraserBtn = document.querySelector(".eraser");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let prevX = null;
let prevY = null;
let draw = false;

body.style.backgroundColor = "#FFFFFF";

var theInput = document.getElementById("favcolor");
var theColor = theInput.value;

theInput.addEventListener("input", function(){
  theColor = theInput.value;
  body.style.backgroundColor = theColor;
}, false);

const brushSizeInput = document.getElementById("BrushSizeInputID");

brushSizeInput.oninput = function() {
    draw = null;
    ctx.lineWidth = brushSizeInput.value;
    document.getElementById("BrushSizeOutputID").innerHTML = brushSizeInput.value;
};

let clrs = document.querySelectorAll(".colorOption");
clrs = Array.from(clrs);

clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr;
    });
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click();
});

window.addEventListener("mousedown", (e) => draw = true);
window.addEventListener("mouseup", (e) => draw = false);

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX;
        prevY = e.clientY;
        return;
    }

    let currentX = e.clientX;
    let currentY = e.clientY;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
});

eraserBtn.addEventListener("click", () => {
    ctx.strokeStyle = "#FFFFFF"; // Set the stroke color to white (acts as an eraser)
});
