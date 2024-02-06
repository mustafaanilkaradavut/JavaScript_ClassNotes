/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

console.log("*****  Function Expression  *****");

//?     Example-1

const oddOrEven = function (num) {
  let result = " ";

  if (num % 2 === 0) {
    result = `${num} it's Even`;
  } else {
    result = `${num} it's Odd`;
  }
  return result; //* Return efect like "Break".
};

const information = oddOrEven(5);
console.log(information);

console.log(oddOrEven(4));
console.log(oddOrEven(23));

//?     Example-2

function primeCalculator(base, prime) {
  return base ** prime;
}

const prime = primeCalculator(3, 4);
console.log(prime);

console.log(primeCalculator(5, 3));

//?     Example-3

let CalculateCircleArea = function (r) {
  return Math.PI * r * r;
};

const r = Number(+prompt("Enter r :"));
const result = CalculateCircleArea(r);
console.log(`Circle Area =${result}`);