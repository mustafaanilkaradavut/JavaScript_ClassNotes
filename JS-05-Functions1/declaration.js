/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

console.log("***** 1 - FUNCTION DECLARATION *****");

// JS have 3 function snytax : Function Declaration / Function Expression / Arrow Function

//?     Example

//* It's not efective for Mordern JS
//* Describe Function      /        Hoisted (Added up, add memory)
//* Parametresiz ( Dışarıdan değer almıyor.)

function hello() {
  console.log("Hello Cohort16");
}

hello(); //* Function call / Function invoke

// Parametreli Function

function sayHello(msg, lesson) {
  console.log(`Hello ${msg} - ${lesson}`);
}

sayHello("Cohort16", "JavaScript");
sayHello("Cohort17", "HTML");
sayHello("Cohort18", "CSS");

//?     Example

function add(s1, s2) {
  console.log("Toplam:", s1 + s2);
}

const num1 = +prompt("S1:");
const num2 = +prompt("S2:");
add(num1, num2);
