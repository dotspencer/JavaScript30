import { paintCircle } from './painter.js';

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const points = [];
let mouseDown = false;

document.body.addEventListener('mousedown', (e) => mouseDown = true);
document.body.addEventListener('mouseup', (e) => mouseDown = false);

document.body.addEventListener('mousemove', (e) => {
  if (!mouseDown) return;
  const drawX = e.clientX - canvas.offsetLeft;
  const drawY = e.clientY - canvas.offsetTop;
  paintCircle(ctx, drawX, drawY);
});
