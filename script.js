const inputStart = document.querySelector('#start');
const inputEnd = document.querySelector('#end');
const button = document.querySelector('button');
const span = document.querySelector('h1 > span');

function calculateDateDiff() {
  let initalDate = inputStart.value;
  let finalDate = inputEnd.value;

  initalDate = new Date(initalDate);
  finalDate = new Date(finalDate);

  let diffInTime = Math.abs(finalDate - initalDate);
  let timeInOneDay = 1000 * 60 * 60 * 24;
  let diffInDay = diffInTime / timeInOneDay;

  return diffInDay;
}

button.addEventListener('click', () => {
  const diffInDay = calculateDateDiff();
  span.innerHTML = diffInDay;
});
