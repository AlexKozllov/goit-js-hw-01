"use strict";

let input;
let total = 0;
let i = 1;
while (i > 0) {
  input = prompt("Введите число");
  input = +input;
  if (isNaN(input)) {
    alert("Введите число");
    continue;
  }
  total = total + input;
  if (input == 0) {
    alert(`Общая сумма чисел равна ${total}`);

    break;
  }
}
