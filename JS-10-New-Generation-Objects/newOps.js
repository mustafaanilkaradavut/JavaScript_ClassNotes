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
