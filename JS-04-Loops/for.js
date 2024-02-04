/* -------------------------------------------------------------------------- */
/*                           JavaScript Loops  - For                          */
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

/* -------------------------------------------------------------------------- */

//?         Example     :       Write a code 5 people's exam results averages.
// let sum = 0;
// let i = 0;
// for (i; i < 5; i++) {
//   const grade = Number(prompt(`Enter ${i + 1}. grade:`));
//   sum = sum + grade;
//   console.log(sum);
// }
// console.log(i);
// console.log(`AVG:${sum / i}`);

/* -------------------------------------------------------------------------- */

//?     Geri Yönde Değişim
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

/* -------------------------------------------------------------------------- */

//?     Aralık Verme
const n1 = 3; //*  15
const n2 = 5; //*  5      -------->    if work   "n2 should be bigger than n1"     !!!
let sum = 0;

if (n1 > n2) {
  console.log("n2 should be bigger than n1");
} else {
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  console.log("SUM:", sum);
}

//*                 Alternative

// if (n1 > n2) {
//   console.log("n2 should be bigger than n1");
// } else {
//   for (n1; n1 <= n2; n1++) {
//     sum += n1;
//   }
//   console.log("SUM:", sum);
// }

//?           BREAK   -   CONTINUE

console.log("**************");

for (let i = 0; i <= 10; i++) {
  if (i % 2) {
    break;
  }
  console.log(i);
}

console.log("-----");

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("----");

for (let i = 0; i <= 10; i++) {
  if (i % 3) {
    continue;
  }
  if (i === 6) {
    break;
  }
  console.log(i);
}
