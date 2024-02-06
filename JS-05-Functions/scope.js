/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

console.log("*****  SCOOPS  *****");

//!     VAR

num1 = 44;
var num1; //*   Could be Hoisting..!
console.log(num1);

// console.log(example);
// let example = 5;
//.. Const and let hoisted olmaz.

var result = "Hello";

if (num1 === 33) {
  let result = "Hola";
  console.log(result); //__     Local Scope Result
} else {
  var result = "Salut";
  //__     2 Var result olduğu için Global Scope Result
}

console.log(result); //__   Global Scope Result

//!     `Var` sometimes will be problem for codes and scopes. Cons and let more safe and better.


