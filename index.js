//Написати функцію, яка всередині себе запитує ввод будь-чого у користувача і повертає введенне значення, якщо ж користувач натискає cansel або вводить порожній рядок, функція повертає: 'try again'Викликаємо функцію всередині console.log()//

// const userInput = prompt("type something");
// const messageWrongData = 'try again';

// const checkUserInput = function (value) {
//   return value === '' || value ===null || value === ' ';
// };

// const showUserInputValue = function (value) {
//   if (checkUserInput(userInput)) {
//     return messageWrongData;
//   }
//   return userInput;
// };

// console.log(showUserInputValue(userInput));


// Right solution
// const getUserInput = function(){
//   const userInput = prompt('type some data');
//   if (userInput === '' || userInput === null || userInput === ' '){
//     return 'try again';
//   }
//   {
//     return userInput;
//   }
// };
// console.log(getUserInput());