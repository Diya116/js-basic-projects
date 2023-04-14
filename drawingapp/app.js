const canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");
let isDrawing = false;
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});
const startDraw = () => {
  isDrawing = true;
};
const drawing = (e) => {
  ctx.lineTo(e.offsetX, e.offsetY); //creating line according t mo
  ctx.stroke(); //filling line with color
};

canvas.addEventListener("mouseover", drawing);
canvas.addEventListener("mousedown", startDraw);
