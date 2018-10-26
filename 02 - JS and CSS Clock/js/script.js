const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
  const now = new Date();
  const secondPercent = now.getSeconds() / 60;
  const minutePercent = now.getMinutes() / 60;
  const hourPercent = (now.getHours() % 12) / 12;
  const startAngle = 270;

  secondHand.style.transform = `rotate(${secondPercent * 360 - startAngle}deg)`;
  minuteHand.style.transform = `rotate(${minutePercent * 360 - startAngle}deg)`;
  hourHand.style.transform = `rotate(${hourPercent * 360 - startAngle}deg)`;
}

setTime();
setInterval(setTime, 1000);
