//! -------------------------------------------------------------------------- */
//?                             FOREACH METHOD                                 */
//! -------------------------------------------------------------------------- */

console.log("*****  ITERATION  *****");

const numbers = [4, 5, 1, 4, 6, 9];
numbers.forEach((x) => console.log(x));





//?             Example 2        :           2 Parametreli forEach 
numbers.forEach((num, i) => console.log("Value:", num, "Alignment:", i));
console.log("************");
//?             Alternative Way 

numbers.forEach(print);
function print(x) {
  console.log(x);
}


//?             Example 3        :           Toplam 
let sum = 0;
numbers.forEach((number)=> (sum+=number))
console.log("SUM: ", sum);