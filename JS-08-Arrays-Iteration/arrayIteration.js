//! -------------------------------------------------------------------------- */
//?                             FOREACH METHOD                                 */
//! -------------------------------------------------------------------------- */

console.log("*****  ITERATION  *****");

const numbers = [4, 5, 1, 4, 6, 9];
numbers.forEach((num) => console.log(num));

console.log("************");

//?             Alternative Way

numbers.forEach(print);
function print(x) {
  console.log(x);
}
