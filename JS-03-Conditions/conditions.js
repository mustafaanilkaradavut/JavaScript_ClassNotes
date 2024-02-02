/* -------------------------------------------------------------------------- */
/*                                 CONDITIONS                                 */
/* -------------------------------------------------------------------------- */

console.log("*** CONDITIONS ***");

//.. Example 1

// const num0 = prompt("Enter a number");
//__ We have use second one. Because first one isn't number.
//const num1 = Number(prompt("Enter a number:"))
// const num2 = 5;
// console.log(num1, typeof num1);
// console.log("Toplam:", num0 + num2); //? String Concatination (Birleştirme)

const num = 3;
if (num < 0) {
  console.log("This number is negative");
} else if (num > 0) {
  console.log("This number is positive");
} else {
  console.log("This number equal 0");
}

//.. Example 2      (Biggest one of 3 numbers)

const numb2 = 2;
const numb3 = 4;
const numb4 = 4;

//* First Method    :   Built-in Function

const biggest = Math.max(numb2, numb3, numb4);
console.log("Biggest Number:", biggest);

//* Second Method   :   Nested İf

// if (numb2 > numb3) {
//   if (numb2 > numb4) {
//     console.log("Biggest Number:", numb2);
//   }
// }

// if (numb3 > numb2) {
//   if (numb3 > numb4) {
//     console.log("Biggest Number:", numb3);
//   }
// }

// if (numb4 > numb2) {
//   if (numb4 > numb3) {
//     console.log("Biggest Number:", numb3);
//   }
// }

//* Third Method    :   With Logic Operators

if (numb2 >= numb3 && numb2 >= numb4) {
  console.log("Biggest Number:", numb2);
} else if (numb3 >= numb2 && numb3 >= numb4) {
  console.log("Biggest Number:", numb3);
} else if (numb4 >= numb2 && numb4 >= numb3) {
  console.log("Biggest Number:", numb4);
} else {
  console.log("Error");
}

// const numb2 = "6"
// const numb3 = 4
// const numb4 = "4"
console.log(numb3 === numb4);
console.log(numb3 == numb4);

console.clear();

//? Three Operators check Type control..!

//.. Fourth Method    With Logic Operators

const num1 = 5;
const num2 = 6;
const num3 = 7;

let biggestNum = num1;

if (num2 > biggestNum) {
  biggestNum = num2;
}

if (num3 > biggestNum) {
  biggestNum = num3;
}

console.log("Biggest Number:", biggestNum);
