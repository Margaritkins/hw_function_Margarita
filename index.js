//class work
//Good practice. Prompt inside the loop {} and it is visible just inside this loop. Constants for checking is outside.
// const PASSWORD = '123';

// while(true)
//   {const userInputPass = prompt('password');

// if (PASSWORD === userInputPass){
//   alert('welcome');
//   break;
// }
// };

//not good practice
// const PASSWORD1 = '123'; // const for comparison with prompt
// let userInputPassword = prompt("enter password"); // Announce (let) prompt BEFORE loop while
// while (PASSWORD !== userInputPassword) // in () condition that make loop repeate again and again (while we gat true from this condition)
// {
//   userInputPassword = prompt("enter password"); // repeating show prompt while the condition return true (the input password is not correct) can be written just name of variable (without =prompt)
// }
// alert("welcome"); //show when the condition return false (the input password is correct)

// while (true) {
//   count++;
//   if(count <=10) break;
//   console.log(count);
// };

// for (let i = 0; i <= 3; i++) {
//   console.log(i);
// }


// Home work
while (true) {
  const userInputNumber = prompt("tupe number from 1to 50 multiple of 7");
  if (
    userInputNumber % 7 === 0 &&
    userInputNumber > 0 &&
    userInputNumber < 50
  ) {
    alert("ok");
    break;
  }
}

const MAX_TRY = 5;
for (let i = 0; i < MAX_TRY; i++) {
  const userInputNumber = prompt("tupe number from 1to 50 multiple of 7");
  if (
    userInputNumber % 7 === 0 &&
    userInputNumber > 0 &&
    userInputNumber < 50
  ) {
    alert("ok");
    break;
  }
}

const multipleNumber = function () {
  for (let i = 0; i < MAX_TRY; i++) {
    const userInputNumber = prompt("tupe number from 1to 50 multiple of 7");
    if (
      userInputNumber % 7 === 0 &&
      userInputNumber > 0 &&
      userInputNumber < 50
    ) {
      alert("ok");
      break;
    }
  }
};
console.log(multipleNumber());
