
const feetInput = document.querySelector('#feet');
const inchInput = document.querySelector('#inch');

feetInput.addEventListener('input', () => {
  const feet = feetInput.value;
  const inches = feet * 12;
  inchInput.value = inches;
});

inchInput.addEventListener('input', () => {
  const inches = inchInput.value;
  const feet = inches / 12;
  feetInput.value = feet.toFixed(2);
});
