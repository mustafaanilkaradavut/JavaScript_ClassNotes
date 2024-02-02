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

//* Fourth Method    With Logic Operators

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

//.. Example 3    Condition Combination

const age = 20;
const gender = "ErKek";
const health = true;

//__ string.toLowerCase() --> Built-in function (They are decribe that in function of JS)
const situation =
  age >= 18 && gender.toLowerCase() === "erkek" && health === true;

if (situation) {
  console.log("Military Service Avaiable");
} else {
  console.log("Military Service Unavaible");
}

//? if(situation) === true ==> if(situation)
//? if(situation) === false ==> if(!situation)

const sentence = " Today Is Wednesday";
const smallWords = sentence.toLowerCase();
const bigWords = sentence.toUpperCase();
console.log(smallWords);
console.log(bigWords);

console.clear();

/* -------------------------------------------------------------------------- */
//* TERNARY
/* -------------------------------------------------------------------------- */

//__ If we have a 2 condition we can use ternary but if we have more than 2 condition then we can use if-else.

const ages = 20;
const year = 5;
//* Ternary Method
age >= 18
  ? console.log("Military Service Avaiable")
  : console.log("Military Service Unaviable");

//* If-Else Method
if (ages < 18) {
  console.log("Military Service Avaiable");
} else {
  console.log("Military Service Unavaible");
}

//?   Nested Ternary
const result = ages <= 14 ? "Children" : ages <= 18 ? "Teeneger" : "Adult";
console.log(result);

//?   If - Else

let final = "";
if (ages <= 14) {
  final = "Children";
} else if (age <= 18) {
  final = "Teeneger";
} else {
  final = "Adult";
}

console.log(final);

/* -------------------------------------------------------------------------- */

//! Example

const workTime = 10;
let salary = 30000;

//__ It's a transcat at one situation senerio.
// workTime >= 10 ? (salary = salary * 1.5) : " ";

//__ It's a transcat that assign value to a variable at one situation senerio
salary = workTime >= 10 ? salary * 1.5 : salary;
console.log("SALARY:", salary);

/* -------------------------------------------------------------------------- */
/*                             SHORT   -   CIRCUIT                            */
/* -------------------------------------------------------------------------- */

//__ If we have only one situation we can use this method.
let salary2 = 40000;
let timePeriod = 22;
let marriage = false;

//?   One Condition and One Situation
timePeriod >= 10 && (salary2 = salary2 * 1.5);

//?   Two Condition and One Situation
// timePeriod >= 10 && marriage === true && (salary2 = salary2 * 1.5);
console.log("SALARY:", salary2);

//!   || Operator

const months = 14;
let finalResult = "";

// months >= 36 || (finalResult = "baby");
// console.log(finalResult);


//?   Falsy bir değerin tespit edilip buna göre bir değişkene başlangıç değeri vermek için kullanıma uygundur.
let myVar = finalResult || "noname";
console.log(myVar);

//..    Final Notes !!
//__  Tek durum var ise Short-Circuit
//__  2 durum var ise Ternary
//__  3-6 arası durum var ise If-Else
//__  6'dan fazla durum var ise switch-case
