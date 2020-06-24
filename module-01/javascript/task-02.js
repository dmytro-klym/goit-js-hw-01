'use strict';


const total = 100;
let ordered = 0;

ordered = prompt('Вкажіть кількість одиниць для замовлення');

if (ordered <= total) {
   console.log('Замовлення оформлено, з вами зв\'яжеться менеджер')
} else {
   console.log('На складі недостатньо товарів!')
}




