import { dateCalculator } from './date-calculator.js';
export function todoListCreate(inputStart, inputEnd) {
  const todoList = document.querySelector('ul#todoList');

  //create Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('listItems');

  //Create Li
  const todoLiInputStart = document.createElement('li');
  todoLiInputStart.innerText = `Initial Date: ${inputStart.value}`;
  todoLiInputStart.classList.add('item');
  todoDiv.appendChild(todoLiInputStart);

  const todoLiInputEnd = document.createElement('li');
  todoLiInputEnd.innerText = `Final Date: ${inputEnd.value}`;
  todoLiInputEnd.classList.add('item');
  todoDiv.appendChild(todoLiInputEnd);

  const todoLiResult = document.createElement('span');
  const result = dateCalculator(inputStart, inputEnd);
  todoLiResult.innerText = `Days: ${result}`;
  todoDiv.appendChild(todoLiResult);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add('btnTrash');

  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}
