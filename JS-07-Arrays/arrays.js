/* -------------------------------------------------------------------------- */
//!                                  ARRAYS                                   */
/* -------------------------------------------------------------------------- */

console.log("*****   ARRAYS   *****");

//?         Dizi tanımlama
/* -------------------------------------------------------------------------- */

//..        Square Bracket  ( Array Literal)

const names = ["Jhon", "Wick", "Robert", true, 6.6, [1, 3], "Break Time"];
console.log(names);
console.log("Uzunluk:", names.length);
console.log(typeof names); //* JS'de her şey object'tir. En temel unsurdur.

//?         Diziden Veri Okuma - Yazma (İndexleme)
/* -------------------------------------------------------------------------- */

console.log(names[3]);
console.log(names[1]);
console.log(names[5][0]);
