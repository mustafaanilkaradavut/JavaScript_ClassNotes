/* -------------------------------------------------------------------------- */
//..                              CHECKOUT APP                                */
/* -------------------------------------------------------------------------- */

//! Döngüler ile event tanımlamak mümkündür ancak fazla sayıda event fazla tüketim demektir. Bunun yerine bubling ile parent elementler tek bir event tanımlanarak aşağıdaki elementlerin eventler yakalanabilir. Yakalanan event, event.target ile ayrıştırılabilir.

// function createEventsForPlusMinus() {
//   const minusBtns = document.querySelectorAll(".fa-minus")
//   const plusBtns = document.querySelectorAll(".fa-plus")

//   console.log(minusBtns)
//   console.log(plusBtns)

//   minusBtns.forEach((minus) => {
//     minus.addEventListener("click", () => {
//       //__ Eksilme islemleri
//     })
//   })

//   plusBtns.forEach((plus) => {
//     plus.addEventListener("click", () => {
//       //__ Arttırrma islemleri
//     })
//   })
// }

//!                 CONSTANTS

const FREE_SHIPPING_LIMIT = 3000;
const SHIPPING_PRICE = 25.99;
const TAX_RATE = 0.18;

//? Selectors
const deleteAllBtn = document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector("article.products");

//? EVENT HANDLERS

deleteAllBtn.addEventListener("click", (e) => {
  products.textContent = "No product";
  products.classList.add("no-product"); // classList.add kısmında  eklenmez.
  document.querySelector(".delete-div").remove();
  // document.querySelector(".delete-div").style.display = "none"
  calculateTotalPrice();
});

products.addEventListener("click", (e) => {
  // if (e.target.classList.contains("fa-plus")) {
  //   alert("plus")
  // } else if (e.target.classList.contains("fa-minus")) {
  //   alert("minus")
  // } else if (e.target.classList.contains("fa-trash-can")) {
  //   alert("delete")
  // }

  if (e.target.classList.contains("fa-plus")) {
    //? static olarak quantity kullanirsak hangi + butonuna tiklanilirsa tiklanilsin akistaki ilk urunun degeri artar.

    //? Traversing DOM
    e.target.previousElementSibling.textContent++;
    // document.getElementById("quantity").textContent++

    // const discountedPrice = document.getElementById("discounted-price")
    // console.log(discountedPrice.innerText)

    calculatePrice(e.target);
  } else if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.textContent > 1) {
      e.target.nextElementSibling.textContent--;
      calculatePrice(e.target);
    }
  } else if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest(".product").remove();
    calculatePrice(e.target);
  }
});

const calculatePrice = (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price");

  const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price");

  const quantity = btn.parentNode.querySelector("#quantity");

  productPrice.textContent = (
    quantity.textContent * discountedPrice.textContent
  ).toFixed(2);

  calculateTotalPrice();
};

const calculateTotalPrice = () => {
  const prices = document.querySelectorAll("#product-price");

  const total = [...prices].reduce(
    (sum, price) => sum + Number(price.textContent),
    0
  );

  const shippingPrice =
    total >= FREE_SHIPPING_LIMIT || total === 0 ? 0.0 : SHIPPING_PRICE;

  const taxPrice = total * TAX_RATE;

  const sum = total + taxPrice + shippingPrice;

  //__ DOM'a sonuçları yazdırma
  const selectedPrice = document.querySelector("#selected-price");
  selectedPrice.textContent = total.toFixed(2);

  document.getElementById("shipping").textContent = shippingPrice.toFixed(2);
  document.getElementById("tax").textContent = taxPrice.toFixed(2);
  document.getElementById("total").textContent = sum.toFixed(2);
};

window.addEventListener("load", () => {
  calculateTotalPrice();
});
