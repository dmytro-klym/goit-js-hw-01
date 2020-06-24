'use strict';

let credits = 23580;
let pricePreDroid = 3000;
let countrDroid = prompt('Скільки потрібно дроїдів')
let totalPrice;

if (countrDroid === null) {
   console.log('Скасовано користувачем!')
} else {
   totalPrice = pricePreDroid * countrDroid;
}

if (credits < totalPrice) {
   console.log('Недостатньо коштів на рахунку!');1
} else {
   credits -= totalPrice;
   console.log('Ви купили ' + countrDroid + ' дроїдів, на рахунку залишилося ' + credits + ' кредитів.');

}