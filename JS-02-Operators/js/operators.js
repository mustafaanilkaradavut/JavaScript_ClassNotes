/* -------------------------------------------------------------------------- */
/*                                  OPERATORS                                 */
/* -------------------------------------------------------------------------- */

//! Aritmatic Operators

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** 6); //* Üs alma işlemi
console.log(a % b); //* Remainder (modules), kalan bulma

console.log(360 / 60);
console.log(375 % 60);

let result = 365 / 6;
console.log(result);
console.log(Math.trunc(result));
console.log(result.toFixed());

//* Hours and Minutes

let time = 375;

let hour = Math.trunc(time / 60);
console.log(hour);

let minute = 375 % 60;
console.log(`375 minutes= ${hour}:${minute}`);
