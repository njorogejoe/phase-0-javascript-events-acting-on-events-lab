// Your code here
const moveDodgerLeft = () => {
  const dodger = document.getElementById('dodger');
  const left = parseInt(dodger.style.left, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

const moveDodgerRight = () => {
  const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left, 10);
    if (left < 360) { // Assuming the game area is 400px wide
        dodger.style.left = `${left + 1}px`;
        }
}