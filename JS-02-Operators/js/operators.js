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

//.. Hours and Minutes

let time = 375;

let hour = Math.trunc(time / 60);
console.log(hour);

let minute = 375 % 60;
console.log(`375 minutes= ${hour}:${minute}`);

//.. INCREMENT / DECREMENT ( post and pre)

//* Post Increment - Decrement

let x = 5;
let y = 2;
console.log(x);
console.log(x++); //6

console.log(y--); // It's decrement to 6.
console.log(y);

//* Pre Increment - Decrement

console.log(++x);
console.log(--y);

console.clear();

/* -------------------------------------------------------------------------- */
/*                            ASSIGNMENT OPERATORS                            */
/* -------------------------------------------------------------------------- */

let t = 10;
let p = 5;

console.log(t);
console.log(p);

console.log((t = t + p));
console.log((t += p));
console.log((t -= p));
console.log((t *= p));
console.log((t /= p));
console.log((t **= p));
console.log((t %= p));

let k = 18;
let h = 3;

console.log((h += k));

let numb = 45.987;
console.log(Math.trunc(numb));
console.log(numb);

/* -------------------------------------------------------------------------- */
/*                            COMPARISON OPERATORS                            */
/* -------------------------------------------------------------------------- */

//? Comparison operators give us boolean result.

let c = 2;
let d = "2";

console.log(typeof c);
console.log(typeof d);
console.log(c == d); //* Eşit mi?
console.log(c === d); //* Type olarak eşit mi?

console.log(c != d);
console.log(c !== d); //* Eşit değil mi?
console.clear();

/* -------------------------------------------------------------------------- */
/*                              LOGICAL OPERATORS                             */
/* -------------------------------------------------------------------------- */

//.. AND    -   &&

//? Everyting have to be true..!

console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(2));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));

console.log(0 && [] && 2);
console.log([] && "M" && 5);
console.clear();

//.. OR    -    ||

//? If find one true value that's enough for it.
//? If everyting would be false then give the first false value

console.log(0 || null || 2 || undefined);

console.log(null);
console.log(!null);
