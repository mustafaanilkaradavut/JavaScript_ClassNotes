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

console.log("***********************");

/* -------------------------------------------------------------------------- */
//..                               FILTER METHOD                              */
/* -------------------------------------------------------------------------- */

const salary = [30000, 70000, 15000, 29000, 47000, 95000, 80000];

const averageOfSalary = salary.filter((m) => m >= 50000); //?     Sallary over then 50000.
console.log(averageOfSalary);

const lowSalary = salary.filter((m) => m >= 30000 && m < 50000); //?     Salary between 30000-50000.
console.log(lowSalary);

//__    It's %20 rise of the salary who earn less than 50000.
//!     Chance Orginal Array
const modifiedSalary = salary.map((m, i, arr) => {
  if (m >= 30000 && m < 50000) {
    arr[i] = m * 1.2;
  }
});
console.log(salary);

console.log("**************************");

/* -------------------------------------------------------------------------- */
//..                            CHAINING (PIPELINE)                           */
/* -------------------------------------------------------------------------- */

//?     Example : Maaşı 50000'den az olanları %20 zam yapalım. ( Orjinal diziyi değiştirerek. )

const salaryCompany = [25000, 36000, 44000, 59000, 87000, 92000];

const riseSalaryCompany = salary.filter((m) => m < 50000).map((m) => m * 1.2);
console.log(riseSalaryCompany);

//__      Functional Programming ( Declarative Programing)
//__      Imperative Programming ( Do - while )

/*   -------------------------------------------------------------------------- */
//..                                   REDUCE                                   */
/*   -------------------------------------------------------------------------- */

const payments = [40000, 30000, 20000, 100000];
const allPayments = payments.reduce((t, m) => t + m, 0);
//__ "t'm, 0" şeklinde yazarız çünkü toplama yapamayacağımız bir değer olursa hata almamızı engeller.

console.log("Result: ", allPayments);

const persons = [4, 5, 3, 2];
const strikePerson = persons.reduce((t, m) => t * m, 1);
console.log("Strike: ", strikePerson);

// !            Example
//? Maaşı 40 binden az olanlara %50 zam yap ve yapılan zammın işverene maaliyetini ortaya çıkar.

const raisePayments = payments
  .filter((m) => m < 40000)
  .map((m) => m * 1.5)
  .reduce((t, m) => t + m, 0);
console.log(raisePayments);

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 44, 78, 89, 25];
const check = ages.every((age) => age >= 18);

check ? console.log("All ages are over 18") : console.log("Some are under 18");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80);
console.log(over80); //? true

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30);
const ageBigThan30Last = ages.findLast((age) => age >= 30);
console.log(ageBigThan30First, ageBigThan30Last);

console.log(ages.find((age) => age >= 80)); //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin
const foundIndex = ages.findIndex((age) => age > 18);
console.log(foundIndex); //? 1
