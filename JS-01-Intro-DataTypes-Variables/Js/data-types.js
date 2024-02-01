//  -------------------------------------------------------------------------- */
//..                                DATA TYPES                                 */
//  -------------------------------------------------------------------------- */

x = 15;
console.log(typeof x);
// __ We can use the  "typeof" for learn the type of our codes.

/* -------------------------------------------------------------------------- */
//..                            PRIMITIVE DATA TYPES                          */
/* -------------------------------------------------------------------------- */

//? This variables hold that only one value.
//? Number, String, Null, Undefined, Boolean, BigInt

//.. NUMBER DATA TYPE
//? This variable describe that Decimally, negative and positive numbers.

age = 29;
number = 18;
console.log(age);
solution = (number * 5) / age + 6;
console.log(solution);

//! We use this method for organise decimally numbers.
//* Round

let clearsolution = Math.round(solution);
console.log("result:", solution);
console.log(clearsolution);

//* Trunc

let truncsolution = Math.trunc(solution);
console.log(truncsolution);

//* Virgülden sonra gelen kısımda kaç basamak göstermek istediğimizi aşağıda yer alan şekilde yaparız.
//* Bir sayıya tofixed uygulandığında sonucu stringtir.

let fixedsolution = solution.toFixed(2);
console.log(solution.toFixed(2));
console.log(fixedsolution);

//! "Random" Method
//* That's using for creating random number.
//* It's creating a number that between 0-1.

console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 33));

console.log(Math.pow(5, 3)); // Üslü sayı
console.log(Math.sqrt(144)); // Karakök

//__ console.clear();      =     It's used to clear the codes above it.

/* -------------------------------------------------------------------------- */

//! "String Data" Type

let str1 = "Hello Word\" It's like a comment";
let str2 = "Hello Word";
let str3 = `Hello Word`;
let str4 = String("Hello word");

console.log(str3);
console.log(typeof str4, str4);
console.log(str1);
console.log(str1[6]);

str1[4] = "p";
//..We can reach inside the value. Bu we cannot change it.

str1 = "Hello Jupiter";
console.log(str1);

let id = 123123123;
let nameSurname = "Elvis Dalton";

console.log("Staff ", nameSurname, "'s id number: ", id);
console.log(`Our Staff ${nameSurname}'s 
id number:${id}`);
//__This technic name Template Literal - String Literal.
//? We can use the strings by dynamic way.
//? It's work for the using variables when we write the strings.

console.clear();

//! BOOLEAN
//* It's include true or false.

let check = 0;

console.log(Boolean());

let control = (password = "12z45");
console.log(Boolean(control));

if (password == "12x45") {
  console.log("System is open");
} else {
  console.log("System is close");
}

/* -------------------------------------------------------------------------- */

//! NULL

let staff = null;
console.log(typeof null);
console.log(null + 5);

//! UNDEFINED

let phoneNumber;
console.log(phoneNumber);
console.log(typeof phoneNumber);

phoneNumber = "+9053239404924";
console.log(typeof phoneNumber);

//! NaN  - ( Not a Number)

let n;
let result = n + 15;
console.log(result);
console.log(isNaN(result));

let result2 = 15;
console.log(result2);
console.log(isNaN(result2));

//..NON PRIMATIVE
//.. Array, Object, Function

let stafflList = ["Ali", "Sevim", "Sinan"]; //* Array
let staffData = { name: "Ali", surname: "Kara", age: "70" }; //* Object

//* Function
function sum() {
  return "total=5";
}
