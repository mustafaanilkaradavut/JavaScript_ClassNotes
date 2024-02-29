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
