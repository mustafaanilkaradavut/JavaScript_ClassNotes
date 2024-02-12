//! -------------------------------------------------------------------------- */
//?                             FOREACH METHOD                                 */
//! -------------------------------------------------------------------------- */

console.log("*****  ITERATION  *****");

const numbers = [4, 5, 1, 4, 6, 9];
numbers.forEach((x) => console.log(x));

//?             Example 1        :           2 Parametreli forEach
numbers.forEach((num, i) => console.log("Value:", num, "Alignment:", i));
console.log("************");

//?             Alternative Way

numbers.forEach(print);
function print(x) {
  console.log(x);
}

//?             Example 2        :           Toplam
let sum = 0;
numbers.forEach((number) => (sum += number));
console.log("SUM: ", sum);

//?             Example 3        :           3 Parametreli forEach

const examResult = [40, 50, 10, 30, 60, 20, 70];

//!         Süslü parantezli olarak da yazılabilir.
// examResult.forEach((result,indis,array) =>{
//     array[indis]=result*1.1
// })

examResult.forEach((result, indis, array) => (array[indis] = result * 1.1));
console.log(examResult);

//__ forEach doesn't return affect. ( Void Function )
console.log(examResult.forEach((x) => x * x)); //*         undefined
const pratice = examResult.forEach((x) => x * x);
console.log(pratice); //*           undefined

/* -------------------------------------------------------------------------- */
//..                                 MAP METHOD                               */
/* -------------------------------------------------------------------------- */

//? Bir dizide ki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

const names = ["Gözde", "Pelin", "Samet", "Burak", "Eren", "Elif", "Samet"];
const copiedNames = names.map((n) => n.toLowerCase());
console.log(copiedNames, names);

//?               Example
//?      tlPrices dizisindeki rakamların Euro ve Dolar karşılıklarını hesaplatarak yeni dizilere kaydediniz.

const euro = 32.97;
const dolar = 30.05;

const iPhoneTL = [90000, 75000, 60000, 40000, 30000];
const iPhoneDolar = iPhoneTL.map((tl) => Math.trunc(tl / dolar));
console.log(iPhoneDolar);

const iPhoneEuro = iPhoneTL.map((tl) => Math.trunc(tl / euro));
console.log(iPhoneEuro);

/* -------------------------------------------------------------------------- */
//..                               FILTER METHOD                              */
/* -------------------------------------------------------------------------- */



