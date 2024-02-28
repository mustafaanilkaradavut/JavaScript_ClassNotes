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

console.log(person.name);
console.log(person.salary);
console.log(person.languages[2]);
console.log(person.examResults.ece201); //*     AA
