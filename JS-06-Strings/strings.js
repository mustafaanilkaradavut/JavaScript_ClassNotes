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

// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

//? -------------------------------------------------------------------------- */

//!     String Birleştirme

const name = "Robert";
const surname = "Duke";
const job = "Developer";

console.log(
  `Our Customer's name:${name} surname:${surname} and his job:${job}`
);
const fullname = name.concat(surname);
console.log(fullname);

//__ toLowerCase()

// console.log(fullname.toLowerCase());

// const enter = "clarusway";
// const enterCode = prompt("Plese write Enter Code:");

// if (enter === enterCode.toLowerCase()) {
//   console.log("Enter is allowed");
// } else {
//   console.log("Wrong Enterence Code");
// }

//__toUpperCase()

const statement = "Today is a nice day with sweet and coffee";
console.log(statement.toUpperCase());
console.log(statement);

/* --------------------------------------------------------------------------  */
//! ---------------------------- String Parçalama ---------------------------- */
/* --------------------------------------------------------------------------  */

//__    split()
//* Split parçaladığı bölümleri diziye çevirir.
//* str.split(operator) --> seperator bir ayraç : ""," ",","/"

let text = "Clarusway IT Bootcamp";
console.log(text);
console.log(text.split(""));

console.log(" ");

const splittedText = text.split(" ");
console.log(splittedText);
console.log(splittedText[2]);

console.log(" ");

for (let i = splittedText.length - 1; i >= 0; i--) {
  console.log(splittedText[i]);
}

let months =
  "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";

console.log(months.split("/"));

let list = "Harry Trump ;Fred Barney ;Helen Rigby ;Bill Abel ;Chris Hand";
console.log(list.toUpperCase().split(";"));

let newList = list.split(";");
console.log(newList[2]);

//!     WARNING     ---     JOIN AND REVERSE are not string methods but using with split.

let sent = "Hello Dear Cohort 16 Students";
let newSent = sent.split(" ");
console.log(newSent);
console.log(newSent[3]);

//*     Reverse -   Array Method
console.log(newSent.reverse().join(" - "));
//*     Join -  Array Method

//__ Polindrom Kelime   /      Interview Question

let word = prompt("Enter a word:");
let wordReverse = word.split("").reverse().join("");
console.log(wordReverse);

word === wordReverse
  ? console.log("It's a polindrom")
  : console.log("It's not a Polindrom");

console.log(" ");
//__      Slice

//? String içinde bir bölümü almak için kullanılır. ( immutable, kalıcı değişlik olmaz.)
//* Slice ( Başlangıç index numarası, bitiş index numarası ( bu numara dahil değil.))

let meaningWord = "Oku da adam ol";
console.log(meaningWord.slice(7, 11));
console.log(meaningWord.slice(7));

//* Terstende erişim sağlanabilir : Negatif değer kullanılır.
console.log(meaningWord.slice(-2, -6));

console.log(" ");

//__    Substring   (Başlangıç index numarası, bitiş index numarası)
//? Slice'dan tek farkı negatif değer kullanılmaz.

console.log(meaningWord.substring(3, 8));

console.clear();
/* --------------------------------------------------------------------------  */
//! ----------------------- String'te değişiklik yapmak ---------------------- */
/* --------------------------------------------------------------------------  */

//.. replace ( aranan,değiştirilecek)   -   replaceall ( aranan, değiştirilecek)
//* Gördüğü ilk değeri değiştirir.

let thinkWord =
  "Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir.";
console.log(thinkWord.replace("kel", "saçli"));

let variable = "Usir nami";
let newVariable = variable.replace(" ", "_");
console.log(newVariable);

let changeVariable = variable.replaceAll("i", "e");
console.log(changeVariable);

/* --------------------------------------------------------------------------  */
//! ---------------------- String içinde arama işlemleri --------------------- */
/* --------------------------------------------------------------------------  */
//..includes,   indexOf,    search,     match()     methods.

//__ includes()  ...yı içeriyor mu --> true ya da false bir değer döndürür. caseSensitive ( küçük - büyük harf duyarlılığı vardır.) bir özelliktedir.

console.log(
  `Is the thinkWord include "tecrübe" : ${thinkWord.includes("tecrübe")}`
);

let url = "https://clarusway.com";
let msg = url.includes("https") ? "This web secured " : "This web not secured";
console.log(msg);

let email = "mustafaanilkaradavut.com";
msg = email.includes("@") ? "Mail is true" : "Mail is not true";
console.log(msg);

//__ İndexOf (aranacak metin)
//? Bir karakter ya da karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir.

console.log(email.indexOf("com"));
console.log(email.indexOf("edu"));
msg =
  email.indexOf("edu") === -1
    ? "This email not for education"
    : "This email for education";
console.log(msg);

//__ Search()
//? Bir string içindeki aranan elemanda ilk bulduğunun index numarasını yazar. Bulmazsa -1 döner.

let desc = "Clarusway it bootcamp, Clarusway develop you IT field";

console.log(desc.search("IT"));
console.log(desc.search("it"));

//?     Regex   -   Regular Expression
//*     / ile ifade edilir.
//*     /g --> global, bütün cümle içinde uygula.
//*      /i --> case sensitive özelliğini kaldır. Küçük büyük olmasına bakmadan bul.

console.log(desc.search(/IT/gi));
console.log(desc.replace(/IT/gi, "Communication"));

//__ Match
//? string içinde aranan metin bulunur ve bir dizi gönderir.
//? Regex ifadeler de kullnılabilir.

let desc1 = "Today is not good and Cold, the weather is bitterly cold ";
console.log(desc1.match(/cold/gi));

let changeDesc1 = desc1.match(/cold/gi);
console.log(changeDesc1[0]);
console.log(changeDesc1.length);

//* trim, startsWith, endsWith
let decs2 = "       Clarusway";
console.log(decs2.trim());

sent = "Clarusway";
console.log(sent.startsWith("c"));
console.log(sent.endsWith("y"));
