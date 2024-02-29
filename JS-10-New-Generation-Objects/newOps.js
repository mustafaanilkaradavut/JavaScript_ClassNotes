console.log("*****   NEW OPERATORS   *****");

/* -------------------------------------------------------------------------- */
//..                           DESTRUCTURING (OBJECT)                         */
/* -------------------------------------------------------------------------- */

const product = {
  id: "11223",
  brand: "Apple",
  type: "Smart Phone",
  price: 3000,
};

const product2 = {
  id: "32058",
  brand: "Samsung",
  type: "Smart Phone",
  price: 2000,
};

//?        "." notasyonu

console.log(product.price);
let proPrice = product.price;
console.log(proPrice);
proPrice += 100;
console.log(proPrice);

//?        Square Bracket

const proId = product["id"];
console.log(proId);

//?         Destructuring
//*         Değişiklik isimleri objedeki key'lere eş olmalıdır.

let { id, price } = product;
console.log("ID:", id);

price += 500;
console.log("Price:", price);
console.log(product);

const { type } = product;
console.log("Type:", type);

//?         Key'ler isim değişikliği ":" ile yapılabilir.
const { id: pro1Id, price: pro1Price } = product2;
console.log("PRO1:", pro1Id);
console.log("PRO1", pro1Price);

//! Destructuring ile tek satır bir çok objenin key'i değişken hale getirebilir.
//* const { id, brand, price, type } = product;

//?         NESTED DESTRUCTURING

const people = {
  person1: {
    id: "2047309349",
    name: "Jonothan",
    surname: "Ballack",
    job: "Police",
    salary: 59000,
  },
  person2: {
    id: "228381029",
    name: "Barbara",
    surname: "Hattichsan",
    job: "Doctor",
    salary: 95000,
  },
};

console.log(people.person1.job);
console.log(people["person2"]["job"]);

// //?         Level 1 Destructuring
// const { person1, person2 } = people;
// console.log(person1);

// //?         Level 2 Destructuring
// const { name, salary } = person1;
// console.log(name, salary);

// //?         2 Level Destructuring
const {
  person1: { name, job },
  person2: { name: name2Ad, job: name2Job },
} = people;

console.log(name, job);
console.log(name2Ad, name2Job);

//..                Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

console.log("***************");

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name:", person.name);
  console.log("Surname:", person.surnames);
  console.log("Job:", person.job);
  console.log("Age:", person.name);
  console.log("Name:", person.name);
  console.log("****************");
});

//!         Functıonlarda Destructuring Kullanımı

const showObj = function () {
  return {
    name: "Ruth",
    surname: "McKallighana",
    job: "Team Lead",
    age: 40,
  };
};

//* function'un dondurdugu obje dogrudan destructuring yapılabilir.
// let { name, surname, job, age } = objGoster();

// console.log(name, surname);
// console.log("Age:", ++age);

console.log(showObj());

//? Function parametresi

const data = {
  id: "123",
  desc: "This is top secret information",
  createdTime: "1900",
};

const printData = (data) => {
  console.log(` ${data.id} - ${data.desc} - ${data.createdTime}`);
};

const printDataDestr = (data) => {
  const { id, desc, createdTime } = data;
  console.log(` ${id} - ${desc} - ${createdTime}`);
};

const printDataDestrAir = ({ id, desc, createdTime }) => {
  console.log(` ${id} - ${desc} - ${createdTime}`);
};

printData(data);
printDataDestr(data);
printDataDestrAir(data);

/* -------------------------------------------------------------------------- */
//..                           DESTRUCTURING (ARRAY)                          */
/* -------------------------------------------------------------------------- */

const customer = ["Joseph", "Stephen", "Galadriel", "Saruman"];
let Joseph = customer[0];

let joseph = customer[0];
console.log(customer);

const [customer1, customer5] = customer; //__ Burada verdiğimiz değişkenler sırasıyla customer array'indeki değerleri alır.

console.log(customer1, customer5);

/* -------------------------------------------------------------------------- */
//..                              REST     (...)                              */
/* -------------------------------------------------------------------------- */

//? REST operatörü kullanıcı tarafından girilen değeleri dizi içerisine konumlandırır. Çeşitli kullanım alanları vardır.

//! 1- Bir dizi veya object'deki bazı değerlerden geri kalanlarını ayrı dizi yada objelere kopyalanmasını sağlayabilir..

//__        REST: Array

const cars = ["BMW", "Volvo", "Mercedes", "Lamborgini", "Ferrari"];
const [car1, car2, car3, ...ElectiricCars] = cars;

console.log(car1, car2, car3);
console.log(ElectiricCars);

//__         REST: Object

const info = {
  name: "Sauron",
  surname: "Nazgul",
  job: "Enemy",
  age: 20484,
};

const { age, ...story } = info; //?    Üç nokta en sona gelmek zorunda ve geri kalan tüm dataları kullanır.
console.log(story);

//! 2- Bir fonksiyonun argümanlarını diziye çevirmek için kullanılabilir.

const sum = (a, b) => a + b;
console.log(sum(1, 5, 2, 7, 9)); //*  ------>  6

const sum2 = (...numbers) => {
  //* Bu şekilde sayıları diziye çevirmiş oluyoruz.
  return numbers.reduce((a, b) => a + b);
};

console.log("Summary:", sum2(1, 5, 2, 7, 9));
//?   REST (...) ile non-iterable olan sayıları iterable hale (diziye) çevirmiş oluruz.

/* -------------------------------------------------------------------------- */
//..                              SPREAD   (...)                              */
/* -------------------------------------------------------------------------- */

//?   Spread operatörü ise iterables olan bir elemanı bireysel değerler haline getirirler.

const airVehicle = ["helicopter", "drone", "plane", "rocket"];
const landVehicle = ["car", "motorbike", "bikecyle"];

const vehicles = [airVehicle, landVehicle]; //*    Nested

const flatVehicles = [...airVehicle, ...landVehicle];
//? iterable durumdan non-iterable duruma geçer.
console.log(flatVehicles);

//?                 Example

const sentence = "We are humans who be strong together";
const sentenceArray = [...sentence];
console.log(sentenceArray);

//?                 Example
//?      Spread ile bir iterable(array), non-iterable çevrilebilir.

const numbs = [1, 3, 4, 5];
// console.log(Math.max(numbs)); //* NaN
console.log(Math.max(...numbs));

//?                 Nested

const staff = {
  staff1: {
    name: "Hulk",
    surname: "Gollagh",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  staff2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  staff3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

//?   Javascript'de objeler default olarak iterable değildir. Ama for in ve for of döngüleri ile itere edilebilirler.

//?   Objelerin key ve value'larını okumak için built-in metotlar vardır. Bu metotlar aslında objelerin key ve/veya value'larını bir dizi olarak döndürür.

//!             FOR - IN
//*     for(key in object)
//*     // code block to be executed
//*     }

//?   s --> Objedeki her bir key i gösterir.
for (let s in staff) {
  // console.log(s);
  // console.log(staff[s]); //__  square bracket --->  Her bir objeyi getirir.
  console.log(staff[s].salary); //__ square bracket --->  Her bir maaşı getirir.
}

//..            Kullanışlı Object Metotları

console.log(Object.keys(staff)); //* Objenin Key'lerini array olarak döndürür.
console.log(Object.values(staff)); //* Objenin Value'larını array olarak döndürür.
console.log(Object.values(staff.staff2)); //* Objenin Value'larını array olarak döndürür.

//?   Entries --> Key ve values çiftini array olarak döndürür.
console.log(Object.entries(staff));
console.log(Object.entries(staff.staff3));
