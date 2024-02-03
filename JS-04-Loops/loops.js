/* -------------------------------------------------------------------------- */
/*                               JavaScript LOOP                              */
/* -------------------------------------------------------------------------- */

console.log("***** FOR *****");
//!   For döngüsünde koşul cümlesinde == veya != operatörleri kullanmak sonsuz veya girilmeyen döngüye yol açması muhtemeldir. Bu sebeple, genellikle >, <, <=, >= işlemlerini kullanmalıyız.

//.. Girilmeyen Döngü
// for (let i = 1; i == 50; i = i * 3) {
//   console.log(i);
// }

//.. Sonsuz Döngü
// for (let i = 1; i != 50; i = i * 3) {
//   console.log(i);
// }

//?         Example     :       Write a code 5 people's exam results averages.

let sum = 0;
let i = 0;
for (i; i < 5; i++) {
  const grade = Number(prompt(`Enter ${i + 1}. grade:`));
  sum = sum + grade;
  console.log(sum);
}
console.log(i);
console.log(`AVG:${sum / i}`);
