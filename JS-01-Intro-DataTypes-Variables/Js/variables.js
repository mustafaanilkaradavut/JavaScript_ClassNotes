x = 15;
username = "Sacha";
age = 23;

console.log(username);

// ------------------------------------------------------
//               JAVASCRIPTS VARIABLES
// ------------------------------------------------------

//! Const - Let . They become after ES6 . They using for describe the variables.

//.. CONST
//* Const  =  constant  =  sabit

const idnumber = 12673598576;
// idnumber = 18231273123782137;
// TypeError: Attempted to assign to readonly property.

//.. LET

let total = 0;

x = 23;
y = 37;

total = x + y;
console.log(total);

//__ GLOBAL AREA : Sharin area that finding all section in program.
//__ LOCAL AREA : It's in the block. It's describe by { } blocks. If - while - for.

const number1 = 5;

//? Local Area
{
  console.log(number);
  const pi = 3.14;
  console.log(pi);
}

//? Global Area
// console.log(pi);

//.. VAR

var number = 100;

{
  console.log(number);
  number = 50;
}

console.log(number+15);
