'use strict';

let nameCountry = prompt('Вкажіть країну куди відправити товар');
nameCountry = nameCountry.toLowerCase();
let priceDelivery = 0;

switch (nameCountry) {

   case 'китай':
      priceDelivery = 100;
      console.log(`Доставка в Китай буде коштувати ${priceDelivery} кредитів`);
      break;

   case 'чилі':
      priceDelivery = 100;
      console.log(`Доставка в Чилі буде коштувати ${priceDelivery} кредитів`);
      break;

   case 'австралія':
      priceDelivery = 100;
      console.log(`Доставка в Австралію буде коштувати ${priceDelivery} кредитів`);
      break;

   case 'індія':
      priceDelivery = 100;
      console.log(`Доставка в Індію буде коштувати ${priceDelivery} кредитів`);
      break;

   case 'ямайка':
      priceDelivery = 100;
      console.log(`Доставка в Ямайку буде коштувати ${priceDelivery} кредитів`);
      break; китай

   default:
      alert('У вашій країні доставка недоступна');
}
