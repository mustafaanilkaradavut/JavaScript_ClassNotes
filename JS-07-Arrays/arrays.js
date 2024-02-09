/* -------------------------------------------------------------------------- */
//!                                  ARRAYS                                   */
/* -------------------------------------------------------------------------- */

console.log("*****   ARRAYS   *****");

//?         Dizi tanımlama
/* -------------------------------------------------------------------------- */

//..        Square Bracket  ( Array Literal)

const names = ["Jhon", "Wick", "Robert", true, 6, [1, 3], "Break Time"];
console.log(names);
console.log("Uzunluk:", names.length);
console.log(typeof names); //* JS'de her şey object'tir. En temel unsurdur.

//..         Diziden Veri Okuma - Yazma (İndexleme)
/* -------------------------------------------------------------------------- */

//__    Okuma

console.log(names[3]);
console.log(names[1]);
console.log(names[5][0]);

//?         Dizinin son elamanını bir değişkene saklamak

// const lastElement = names[6];            //* It's not a dynamic solution

const lastElement = names[names.length - 1];
console.log(lastElement);

//__    Yazma

names[3] = "Clare";
names[4]++;
console.log(names);

names[2] = names[2].toLowerCase();
console.log(names);

//  names = [4, 5, 6];          //! TypeError: Attempted to assign to readonly property.
//* const değil de let ile yapmış olsak yukarıdaki array'de değiklik yapılabilir. Const ile kullanmak güvenlik açısından daha mantıklıdır.

//..  2. Yöntem ( Object Constructor )

const programmingLangs = new Array("50", "JS", "Java");
console.log(programmingLangs);

//*  Eğer constructora parametre olarak tek bir sayı(number) girilirse;
//*             Constructor bunu o sayıda bir bellek alanı açılacakmış gibi düşünülür.

const myArry = new Array(10); //? [empty x 10]
console.log(myArry);

//..  3. Yöntem ( Array.of() )

const numbers = Array.of(4);
console.log(numbers);

/* --------------------------------------------------------------------------  */
//!                        DİZİYİ DEĞİŞTİREN METHOTDLAR                        */
/* --------------------------------------------------------------------------  */

const cars = ["Bmw", "Audi", "Volvo", "Lamborgini", "Porsche", "Fiat"];
cars[cars.length] = "Tofaş";
console.log(cars);

//*     push() dizinin sonuna eleman ekler ve dizinin son eleman sayısını döndürür.
cars.push("Mini Couper");
console.log(cars);

// const ex = cars.push("Kartal");
// console.log(cars, ex);

//*     pop() dizinin son elamanını siler ve dizinin sildiği elemanla beraber döndürür.
cars.pop();
console.log(cars);

const deletedCar = cars.pop();
console.log(deletedCar, cars);

//*     shift() dizinin 0. indeks elamanını siler ve silinen elemanı döndürür.
const bmw = cars.shift();
console.log(bmw, cars);

//*     unshift() dizinin 0. indexine elaman ekler ve eklediği elemanlı şekliyle döndürür.
const newEx = cars.unshift("Toros");
console.log(newEx, cars);

//*     splice()
//?     1.parametre : eklenecek index numarası.
//?     2.parametre : 0 ise araya ekleme 1 ise üzerine yazma.
//?     3.parametre : yeni eklenecek veri.

cars.splice(1, 0, "Kartal");
console.log(cars);

cars.splice(4, 0, "Serçe", "Togg");
console.log(cars);

//*     reverse()

cars.reverse();
console.log(cars);

//*     sort()

