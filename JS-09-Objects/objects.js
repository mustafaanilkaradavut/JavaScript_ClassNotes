/*  --------------------------------------------------------------------------  */
//..                                   OBJECTS                                  */
/*  --------------------------------------------------------------------------  */

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("*****  OBJECTS  *****");

//?     Array'lerde ilişkisel veriler
const studentName = ["jonson", "collette", "anna"];
const studentSurname = ["barrack", "wall", "shonsan"];
const studentAddress = ["manhattan", "brooklyn", "miami"];

console.log(`${studentName[0]}-${studentSurname[0]}-${studentAddress[0]}`);

//!                 3 FARKLI YÖNTEM İLE OBJECT OLUŞTURULABİLİR.

/*   -------------------------------------------------------------------------- */
//__                  1-OBJECT LITERAL ( En çok tercih edilen)                  */
/*   -------------------------------------------------------------------------- */

const person = {
  name: "Scarlet", //  İlk yazılan key:'den sonra value.
  surname: "Jhonson",
  idNumber: "82733932838",
  bDay: "07/07/1997",
  salary: 70000,
  driverLicence: true,
  languages: ["english", "arabic", "turkish"],
  examResults: { mat101: "AA", tur208: "BA", ece201: "CB" },
  bYear: 1997,
  calculateAge: function () {
    return new Date().getFullYear() - this.bYear; //__ Buradaki this keyword'ün anlamı; içinde bulunduğu objeyi temsil ve refere eder.
  },
};

//!     this keyword'ü içerisinde bulunduğumuz objeyi refere eder.
//!     Global alanda yazılan this ise global objeyi refere eder.
//!     window tarayıcının herşeyini barındıran temel bir objedir.

console.log(this); //?      Global alanda (window nesnesi gösterir.)

//__     A.)     . notasyonu ile erişim.

//* ----- OKUMA -----
console.log(person.name);
console.log(person.salary);
console.log(person.languages[2]);
console.log(person.examResults.ece201); //*     CB

console.log(person.calculateAge());

//__     B.)     Square Bracket ile erişim.

console.log(person["idNumber"]);
console.log(person["examResults"]["tur208"]); //*     BA

// const selector = prompt(
//   "Which detail you wanna learn? name,surname,idNumber,bDay,salary,driverLicence,languages,examResults,bYear,calculateAge"
// );

// console.log(person[selector]); //!  square bracket yönteminde key bir değişken olabilir.

// console.log(person.selector); //!   .notasyonunda key bir değişken olamaz.

console.log(person);

//* ----- YAZMA -----

person.bYear = 1995;
person.languages = "Turkish-English";
person.weight = 80;

//!     Burada yaptığımız değişiklikler yukarıdaki alanımızı da etkiler.

console.log(person);

/*  --------------------------------------------------------------------------  */
//..                            NESTED OBJECTS                                  */
/*  --------------------------------------------------------------------------  */

//!     Objeler itere edilebilir yapılar değildir. Bir döngü ile objeyi dolaşamayız.

const persons = {
  //  İlk yazılan key:'den sonra value.
  adam: {
    surname: "Jhonson",
    idNumber: "82733932838",
    bDay: "07/07/1997",
    salary: 70000,
  },
  tony: {
    surname: "Hecker",
    idNumber: "2323293293",
    bDay: "03/02/1990",
    salary: 50000,
  },
};

console.log(persons.adam.idNumber);
console.log(persons["tony"]["salary"]);

/* -------------------------------------------------------------------------- */
//..               JSON     -->    JavaScript Object Notation                 */
/* -------------------------------------------------------------------------- */

const people = [
  {
    name: "gabriel",
    lastName: "grotum",
    id: "208720237403",
    salary: 120000,
    job: "Developer",
  },
  {
    name: "tatum",
    lastName: "hoytum",
    id: "20484923442",
    salary: 77000,
    job: "Developer",
  },
  {
    name: "robin",
    lastName: "papara",
    id: "5958303345",
    salary: 45000,
    job: "Tester",
  },
];

people.forEach((p) => console.log(p.name));
people.forEach((p) => console.log(p.salary));

// const key = prompt("Which detail you wanna learn? name,lastName,id,salary");
// people.forEach((p) => console.log(p[key]));

people.forEach((p) => console.log(p["id"]));

//?     Maaşların toplamı
const allSalary = people.reduce((t, p) => t + p.salary, 0);
console.log(allSalary);

//?     Job'u developer olanların isim soyisim beraber yazdırınız.

const devs = people.filter((p) => p.job === "Developer");
console.log(devs);

const devNames = people
  .filter((p) => p.job === "Developer")
  .map((p) => `${p.name} ${p.lastName}`);
console.log(devNames);
