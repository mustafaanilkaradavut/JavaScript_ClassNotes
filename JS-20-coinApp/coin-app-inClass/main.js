import "./scss/style.scss";
//__ Bu importu yaptığımızda bize hata verir ve sass yüklenip yüklenmediğini sorar.
//__ Bunun için npmjs'den sass'ın third party kütüphanesini indiririz.
//__ npm i sass yaparsak kulurum yaparız. Ardından npm run dev ile kurulumu tamamlarız.
import { getCoins } from "./src/getCoins";

//?   Selectors

const form = document.querySelector("header form");

//?   Form için submit event'nin tanımlanması
form.addEventListener("submit", (e) => {
  e.preventDefault(); //! form eventinin tüm doğal davranışlarını disable eder.
  getCoinData();
  e.target.reset(); //! formu silme davraşını aktif hale getirir.
});

const getCoinData = () => {
  const input = document.querySelector("header form input").value;
  if (!input.trim()) {
    alert("Input must be entered");
  } else {
    //? GET COIN
    getCoins(input);
  }
};
