/* -------------------------------------------------------------------------- */
/*                        JavaScript Loops    -   While                       */
/* -------------------------------------------------------------------------- */

console.log("***** WHILE *****");

//?     Example 1   ---

let i = 1;
while (i <= 10) {
  console.log(i, "Cohort16");
  i++;
}

console.log("********************");

for (let i = 1; i <= 10; i++) {
  console.log(i, "Cohort16");
}

console.log("Finish Loops");

//?     Example 2   ---
//?     Kullanıcıdan 0-100 arasında bir not isteyen ve girilen not'u aşağıdakiler uygularak "While" ile yaz.
//?     0-100'den farklı ise kullanıcıyı uyararak yeniden 0-100 arasında not girmeye zorlayan kodu yazınız.

//.. Tek başına karar yapıları ile tekrarlama işlemi yapılamaz.
//.. Tekrar varsa döngü var demektir.
//.. Karar yapısı kontrol eder ve duruma göre programın akışını yönlendirir ama tekrar yaptırmaz.

// let number = +prompt("Enter a number between 0 and 100");
// if (number < 0 || number > 100) {
//   alert("This number isn't between 0-100 !!");
// }

let number1 = +prompt("Enter a number between 0 and 100");
let exit = false; //__   Flag Mechanism

while (number1 < 0 || number1 > 100) {
  console.log("This number should be between 0-100");
  number1 = prompt("Enter a number between 0-100 or Press Q for exit");
  if (number1 === "q") {
    exit = true;
    break;
  }
}

exit ? console.log("Exit Allowed") : console.log("Entered Number=", number1);

//!     "?" İfadesi varsa anlamında kullanılır.

// let number2 = +prompt("Enter a number between 0 and 100");
// let exit2 = false; //__  Flag Mechanism

// for (; number2 < 0 || number2 > 100; ) {
//   console.log("This number should be between 0-100");
//   number2 = prompt("Enter a number between 0-100 or Press Q for exit");
//   if (number2 === "q") {
//     exit2 = true;
//     break;
//   }
// }

// exit2 ? console.log("Exit Allowed") : console.log("Entered Number=", number2);


