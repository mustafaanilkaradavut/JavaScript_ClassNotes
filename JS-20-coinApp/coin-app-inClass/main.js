import "./scss/style.scss";
//__ Bu importu yaptığımızda bize hata verir ve sass yüklenip yüklenmediğini sorar.
//__ Bunun için npmjs'den sass'ın third party kütüphanesini indiririz.
//__ npm i sass yaparsak kulurum yaparız. Ardından npm run dev ile kurulumu tamamlarız.
import { getCoins } from "./src/getCoins";

//?   Selectors

const form = document.querySelector("header form");
console.log(form);

//?   Form için Sumbit Event'inin tanımlanması

form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault(); //! form eventinin tüm doğal davranışları disable eder.
  getCoinsData();
  e.target.reset(); //! formu silme işlemini aktif eder.
});

const getCoinsData = () => {
  const input = document.querySelector("header form input").value;
  if (!input.trim()) {
    alert("input must be entered");
  } else {
    //? GET COIN
    getCoins(input);
  }
};
