const inputStart = document.querySelector('#start');
const inputEnd = document.querySelector('#end');
const buttonDate = document.querySelector('#btn-date');
const span = document.querySelector('h1 > span');

import { dateCalculator } from './date-calculator.js';
import { todoListCreate } from './todo-list.js';

buttonDate.addEventListener('click', () => {
  actionButton();
  todoListCreate(inputStart, inputEnd);
});

const actionButton = () => {
  const diffInDay = dateCalculator(inputStart, inputEnd);
  span.innerHTML = diffInDay;
};
