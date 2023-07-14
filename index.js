//Написати функцію Калькулятор, яка приймає аргументами два числа и знак(рядок - +-*/) і повертає результат виконання дії або NaN, якщо неможливо виконати дію або не має такого знаку.

// solution 1
// const number1 = prompt("first number");
// const number2 = prompt("second number");
// const sign = prompt("chose act");

// const isNumber = function(num){
//   if (Number(num) || Number(num) ===0){
//   return Number(num);
// };
// };

// const sum = function (num1, num2) {
//   if (isNumber(num1) && isNumber(num2))
//   return Number(num1) + Number(num2);
// };
// const sab = function (num1, num2) {
//   if (isNumber(num1) && isNumber(num2))
//   return Number(num1) - Number(num2);
// };
// const mult = function (num1, num2) {
//   if (isNumber(num1) && isNumber(num2))
//   return Number(num1) * Number(num2);
// };
// const div = function (num1, num2) {
//   if (isNumber(num1) && isNumber(num2) ===0 || isNumber(num1) ===0 && isNumber(num2) ===0){
//     return null;
//   }
//   return Number(num1) / Number(num2);
// }

// const calculator = function (num1, num2, sign) {
//   switch (sign) {
//     case "+":
//       return sum(num1, num2);
//     case "-":
//       return sab(num1, num2);
//     case "*":
//       return mult(num1, num2);
//     case "/":
//       return div(num1, num2);
//     default:
//       return null;
//   }
// };
// console.log(calculator(number1, number2, sign));


// solution 2
// const sum = function (num1, num2) {
//   return num1 + num2;
// };
// const sub = function (num1, num2) {
//   return num1 - num2;
// };
// const mult = function (num1, num2) {
//   return num1 * num2;
// };
// const div = function (num1, num2) {
// if( num2 ===0){
//   return null;
// }
//   return num1 / num2;
// };

// const calculator = function (val1, val2, oper) {
//   switch (oper) {
//     case "+":
//       return sum(val1, val2);
//     case "-":
//       return sub(val1, val2);
//     case "*":
//       return mult(val1, val2);
//     case "/":
//       return div(val1, val2);
//     default:
//       return null;
//   }
// };
// console.log(calculator(0, 0, '/'));