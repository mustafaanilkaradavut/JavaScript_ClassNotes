/* -------------------------------------------------------------------------- */
//..                                 EVENTS                                   */
/* -------------------------------------------------------------------------- */

console.log("****** EVENTS *******");

const yazdir = () => document.write("Hello FS16");
yazdir();

//?    Selectörler

const h2 = document.querySelector(".add-item h2");
const body = document.querySelector("body");
const myInput = document.getElementById("input");
const addButton = document.getElementById("btn");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

//?   Event Tanımlamaları

//__ mouse h2 elemenitini üzerine geldiğinde tetiklenir.
h2.onmouseover = function () {
  //   h2.style.color = "red"
  h2.classList.add("red", "center");
};

//__ mouse h2 elementenin üzerinden ayrıldığında tetiklenir.
h2.onmouseout = () => {
  h2.classList.remove("red", "center");
};

//__ DOM içeriklerinin tamamı yüklendikten sonra tetiklenen event (onload). 
body.onload = function () {
  myInput.focus();
};

//__ DOMContentLoaded (metin v.b içerikler yüklenince tetiklenir. Resim, link gibi içeriklerin yüklenmesini beklemez.)
// body.DOMContentLoaded = function () {
//     myInput.focus()
// }

addButton.onclick = (e) => {
  //   console.log(e)
  //   console.log(e.target)
  //   console.log(e.target.value)
  //   console.log(e.target.id, e.target.name)
  myInput.focus(); //* Bu kod parçacığı ile hata aldığımızda veya veri işlediğimizde focus özelliğini koruruz.

  if (!myInput.value.trim()) {
    alert("Lutfen bir icerik giriniz");
    return;
  }
 
  const li = document.createElement("li");
  li.textContent = myInput.value;
  ul.appendChild(li);
  myInput.value = ""; 
};

//__ Form içerisindeki submit butonuna her basıldığında bu onSubmit event'i tetiklenir.
//__ submit eventi otomatik olarak enter tuşunun kullanımı sağlar.
// form.onsubmit = function (e) {
//   e.preventDefault() //__ submit işleminin temel özelliklerini (formu silmek, sayfayı refresh yapmak gibi) iptal eder.
//   console.log(e.target)

//   myInput.focus()

//   if (!myInput.value.trim()) {  //* Trim ile spaceleri keseriz.
//     alert("Lutfen bir icerik giriniz")
//     return
//   }

//   const li = document.createElement("li")
//   li.textContent = myInput.value
//   ul.appendChild(li)
//   myInput.value = ""
// }

//__ input üzerinde klavyeden bir tuşa basıldığında tetiklenir.
myInput.onkeydown = function (e) {
  //   console.log(e.code)
  if (e.code === "Enter") {
    addButton.click();
  }
};
