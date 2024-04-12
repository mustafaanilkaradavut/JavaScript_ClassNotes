// "use strict" //! Derleyici direktifi, hatalar konusunda katı olup bize kod yazma aşamasında sıkça error verip hataları gösterir.

console.log("CALCULATE.JS");

const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};

//? Global namespace :  Bir yerde tanımlanan değişken (students) başka bir yerde tanımlanamaz.
// const students = ["Canan", "Can"]

myVariable = "my string"; //! use Strict -> myVariable is not defined
console.log(myVariable);

console.log(this); //? window
