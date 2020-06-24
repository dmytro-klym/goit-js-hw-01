'use strict';


const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Ведіть пароль');

switch (message) {
   case null:
      alert('Скасовано користувачем!')
      break;

   case ADMIN_PASSWORD:
      alert('Ласкаво просимо!')
      break;

   default:
      alert('Доступ заборонений, невірний пароль!')
}

