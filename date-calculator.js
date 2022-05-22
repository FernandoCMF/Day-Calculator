export function dateCalculator(inputStart, inputEnd) {
  let initalDate = inputStart.value;
  let finalDate = inputEnd.value;

  initalDate = new Date(initalDate);
  finalDate = new Date(finalDate);

  let diffInTime = Math.abs(finalDate - initalDate);
  let timeInOneDay = 1000 * 60 * 60 * 24;
  let diffInDay = diffInTime / timeInOneDay;

  return diffInDay;
}
