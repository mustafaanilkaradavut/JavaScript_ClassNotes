/* -------------------------------------------------------------------------- */
//..                           ES-MODULES (APP.JS)                            */
/* -------------------------------------------------------------------------- */
//__ ES6 ile yazılan kodlarımızda browser olması yeterli değildir. Çalışması için live server kullanılır. 
//? ES Modules, EcmaScript 2015 versiyonu ile gelmiştir.
//? Günümüzde bir çok browser ES modül yapısını desteklemektedir.
//? JS kodlarının kolay ve performanslı bir şekilde farklı dosyalara ayrılmasına ve gerektiğinde birleşmesine olanak sağlamaktadır.
//? Bir değişken, dizi, obje , fonksiyon, class v.b. "export" deyimi ile başka dosyaların kullanımına açılabilir.
//? Kullanıma açılanlar ise import deyimi ile istenilen dosyaya eklenebilir.

import { add as extAdd } from "./hesapMakinasi.js";
import { sub, mul, div } from "./hesapMakinasi.js";

console.log("ADD:", extAdd(3, 5));
console.log("SUB:", sub(3, 5));
console.log("MUL:", mul(6, 5));
console.log("DIV:", div(8, 5));

import { PI as pi } from "./hesapMakinasi.js"; //? Hoisted
console.log(pi);

import giveMessage from "./hesapMakinasi.js"; //? Default olarak tanımlanan bir export işlemini süsleme işareti olmaksınız yazarız.
giveMessage();

//? internal add function
const add = (a, b, c) => a + b + c;

console.log(add(3, 4, 5));

//! use strict modu dogrudan enable oldugu icin hata verir.
// deneme = 5

//? global scope this kelimesi window nesnesini göstermez.
console.log(this); //? undefined
