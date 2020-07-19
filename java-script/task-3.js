"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const inPassword = prompt("Введите пароль");

if (inPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
  console.log(message);
} else if (inPassword == undefined) {
  message = "Отменено пользователем!";
  console.log(message);
} else {
  message = "Доступ запрещен, неверный пароль!";
  console.log(message);
}
