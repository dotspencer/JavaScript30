const checkboxes = document.querySelectorAll('[type="checkbox"]');
let shiftDown = false;
let lastIndex= null;

document.addEventListener('keydown', (e) => (e.key === 'Shift') && (shiftDown = true));
document.addEventListener('keyup', (e) => (e.key === 'Shift') && (shiftDown = false));

checkboxes.forEach((cb, i) => {
  cb.addEventListener('change', (e) => doCheck(i, e.target.checked));
});

function doCheck(index, checked) {
  if (lastIndex == null) return lastIndex = index;
  if (!checked) return lastIndex = null;

  if (shiftDown) {
    const lowI = Math.min(lastIndex, index);
    const highI = Math.max(lastIndex, index);
    for (let i = lowI; i < highI; i++) {
      checkboxes[i].checked = true;
    }
  }
  lastIndex = index;
}
