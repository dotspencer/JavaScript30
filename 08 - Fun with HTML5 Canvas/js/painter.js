export const paintCircle = (ctx, x, y, radius = 20, color = "black") => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 360);
  ctx.fillStyle = color;
  ctx.fill();
};
