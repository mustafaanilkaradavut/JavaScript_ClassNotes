/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

console.log("*****  ARROW  *****  ");

//.. We use arrow if we have a single statement.

//* Arrow function declaration.
const sendMessage = () => console.log("JS is a browser language");

//* invoke
sendMessage();

//?     Example-1

const square = (x) => x * x;
console.log(square(5));

//?     Example-2

// const calculateYear = (year) => 2024 - year;
const calculateYear = (year) => new Date().getFullYear() - year;

const year = Number(prompt("Birthday"));
console.log(`Your age: ${calculateYear(year)}`);

//?     Example-3

const addMessage = () => {
  console.log("You never walk alone!");
};

addMessage();

/* -------------------------------------------------------------------------- */

const square2 = (y) => {
  return y * y;
};
console.log(square2(10));

//?     Example-4

const oddOrEven = (num) => {
  if (num % 2 === 0) {
    result = `${num} is Even`;
  } else {
    result = `${num} is Odd`;
  }
  return result;
};

const information = oddOrEven(5);
console.log(information);

//__ Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir.

console.log("***************************************");

//?     Exaplme-5

const add = (n1, n2) => n1 + n2;
const multiply = (n1, n2) => n1 * n2;
const subtract = (n1, n2) => n1 - n2;
const divide = (n1, n2) => n1 / n2;

const calculate = (num1, num2, op) => {
  let solution = 0;

  switch (operation) {
    case "+":
      solution = add(num1, num2);
      break;
    case "-":
      solution = subtract(num1, num2);
      break;
    case "/":
      solution = divide(num1, num2);
      break;
    case "*":
      solution = multiply(num1, num2);
      break;
    default:
      alert("Wrong Calculate");
      break;
  }
  return solution;
};

const num1 = Number(prompt("Please Enter Number 1 :"));
const operation = prompt("Please enter a operation");
const num2 = Number(prompt("Please Enter Number 2 :"));

const solution = calculate(num1, num2, operation);
console.log(`${num1}${operation}${num2}=${solution}`);
