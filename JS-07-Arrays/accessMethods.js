//! --------------------------------------------------------------------------  */
//?                            ARRAY ACCESS METHODS                             */
//! --------------------------------------------------------------------------  */

console.log("*****  ACCESS  *****");

const numbers = [3, 5, 2, "4", "five", "four", 3, "4", "five", "1", 3, "five"];

//__ -------------------------------- includes() -------------------------------- */

console.log(numbers.includes("4")); //?     true
console.log(numbers.includes("44")); //?    false
console.log(numbers.includes("Five")); //?    false because it's a case sensivity.
console.log(numbers.includes("FOUR".toLowerCase())); //?    true
console.log(numbers.includes("four", 6)); //?   false       -       4 var mı 6. elemandan sonra.

//__ ------------------------ indexOf(),  lastIndexOf() ----------------------- */
//.. İlk eşleşen indexi dondurur. Bulunumazsa -1 döndürür.

console.log(numbers.indexOf("five")); //?     4
console.log(numbers.lastIndexOf("five")); //?     11
console.log(numbers.indexOf("five", 5)); //?     8
console.log(numbers.indexOf("six", 5)); //?     -1

if (numbers.indexOf("five") < 0) {
  console.log("It's not found ");
} else {
  console.log(
    `Your searching number ${numbers.indexOf("five")} is founded in this index`
  );
}

if (numbers.indexOf(22) < 0) {
  console.log("It's not found ");
} else {
  console.log(
    `Your searching number ${numbers.indexOf(22)} is founded in this index`
  );
}

//__ --------------------------------- join() --------------------------------- */
//.. join, dizisinin elemanlarını birleştirip string'e çevirir.

const joinedArray = numbers.join("-");
console.log(joinedArray);
console.log(numbers);

//__ -------------------------------- toString -------------------------------- */
//.. toString fonksiyonu sadece dizinin elamanlarının aralarına virgül koyarak birleştirir ve string yapar.

console.log(numbers.toString());

//__ -------------------------------- concat() -------------------------------- */

const message = ["The weather", "is", "very", "nice"];
const time = new Date().toDateString();
console.log(time, message);

const concatedArray = message.concat("Hello", time, "JS");
console.log(concatedArray);

concatedArray.reverse();
console.log(concatedArray);
console.log(concatedArray.join(" "));
//.. OR
console.log(concatedArray.reverse().join(" "));

//__ ------------------ slice(start, end)   --  end exclusive ----------------- */

let cars = ["BMW", "Mercedes", "Fiat", "Lamborgini"];

const slicedCars = cars.slice(1); //? (Mercedes,Fiat,Laborgini)
console.log(slicedCars, cars);

console.log(cars.slice(0, 2)); //? (BMW-Mercedes)
