/* -------------------------------------------------------------------------- */
/*                                   STRINGS                                  */
/* -------------------------------------------------------------------------- */

console.log("*****  Strings *****");

// Bir string, metin veya karakter dizisi olarak adlandırılan verileri temsil eder.JavaScript'te stringler çift tırnak(""), tek tırnak('), veya backtick (`) içinde tanımlanabilir.

const str1 = "new string";
const str2 = "new string";
const str3 = `new string`;
const str4 = new String("new string");

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log("🚗🏎️🏁");

/* -------------------------------------------------------------------------- */

//! ---------------------------- ESCAPE CHARACTERS --------------------------- */

//* \ Escape Characters \ using with \.
//* \ Hemen yanındaki karakterlerin göz ardı edilmesini sağlar.

let par = "Anil's pencil";
let path = "c:\\Users\\Details";
console.log(path);

//* \n new line -> Bir alt satıra geçilmesini sağlar.
//* \t tab boşluğu verir ( 8 karakterlik boşluk)
const par1 = "Hello Cohort 16\nHave a nie day..!";
console.log(par1);

//* Unicode karakterleri için
console.log("\u2615");
console.log("\uD83C\uDF39");
console.log("\uD83D\uDCB2");
console.log("\u00A9");

console.log(`Hello Cohort 16 \u2615

Have a nie day..!`);

/* -------------------------------------------------------------------------- */

//! ------------------------- STRINGS BUILD AND INDEX ------------------------ */

let course = "Clarusway";
console.log(course);

console.log(course[0]);
console.log(course[4]);
console.log(course[6]);

//? course[4]="a"           ---             Değişim yapılamaz.
//.. Stringler, primative bir tür olduğu için parça olarak değiştirilemez.
//.. Immutable - not mutable

course = "Clarusway Bootcamp";
console.log(course);

for (let i = 0; i <= 17; i++) {
  console.log(course[i]);
}

/* --------------------------------------------------------------------------  */
//! ----------------------- STRING PROPERTY AND METHODS ---------------------- */
/* --------------------------------------------------------------------------  */

//.. **********     STRING PROPERTY     **********

//__ Property bir stringin kendi özelliğidir. Bir metdot (fonksiyon) değildir. Bu nedenle parantez açıp kapatmaya gerek yoktur.

//?     length
//?     prototype

console.log(course.length);

for (let i = 0; i < course.length - 1; i++) {
    console.log(course[i]);
}
console.log("***********************************");
//*         Tersten uygulanışı;

for (let i = course.length - 1; i >= 0; i--) {
    console.log(course[i]);
}

//* Some emojis could be two characters.
const emoji = "🧰";
console.log(emoji.length);

//.. **********     STRING METHODS     **********





