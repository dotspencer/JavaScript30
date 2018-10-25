document.body.addEventListener('keydown', ({ keyCode }) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const div = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio) return;

  // play or restart audio
  (audio.paused) ? audio.play() : audio.currentTime = 0;

  // add/remove highlight
  div.classList.add('playing');
  setTimeout(() => div.classList.remove('playing'), 100);
});
