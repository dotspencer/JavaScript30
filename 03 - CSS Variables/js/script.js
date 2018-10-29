const spacingInput = document.querySelector('#spacing');
const blurInput = document.querySelector('#blur');
const colorInput = document.querySelector('#base');

spacingInput.addEventListener('input', handleChange);
blurInput.addEventListener('input', handleChange);
colorInput.addEventListener('change', handleChange);

function handleChange(event) {
  const { name, value } = event.target;
  const units = event.target.getAttribute('data-sizing') || '';
  document.documentElement.style.setProperty(`--${name}`, `${value}${units}`);
}
