/* -------------------------------------------------------------------------- */
//..                   EVENT BUBBLING (EVENT PROPAGATION)                     */
/* -------------------------------------------------------------------------- */

//! Bir element üzerinde olay (event) meydana geldiğinde ilk olarak 0 elementin event handler fonksiyonu çalışır. Sonrasında ise üstteki parent ve bu şekilde diğer üst parent'lara kadar gider.

//! Bu yapılan prosese "bubling" denilir. Çünkü event, en içteki elementten en dıştaki elemente kadar bir baloncuk gibi yayılır.

// document.querySelector("form").addEventListener("click", () => alert("form"))

// document.querySelector("div").addEventListener("click", () => alert("div"))

// document.querySelector("p").addEventListener("click", () => alert("p"))

// document.querySelector("html").addEventListener("click", () => alert("html"))

//!  <p> elementinin tıklanması ile aşağıdaki olaylar sırasıyla tetiklenir;
//* 1-  <p> elementinin kendi event'i,
//* 2- Dıştaki <div> in event'i,
//* 3- En dıştaki <form> elementinin event'i,
//* 4- Bu şekilde document objesine kadar gider. (Eğer event tanımlaması ise)

//? event.target
/* -------------------------------------------------------------------------- */
//! Event'ın olmasını sağlayan en içteki element "target element" olarak adlandırılır ve event.target ile erişilebilir.

document.querySelector("form").onclick = function (event) {
  console.log(event.target); //? event kaynagi

  //__ Tıklanılan elemanın arkaplan rengini sarı yap.
  event.target.style.backgroundColor = "yellow";

  //__ 500ms gecikme ile atanmış rengi kaldırır.
  setTimeout(() => {
    event.target.style.backgroundColor = "";
  }, 500);
};

//? STOP BUBBLING

//! Normalde bubbling olayı <html>'e ve hatta bazı durumlarda window'a , kadar ulaşır.

//! Ancak gerekli oldugunda bir element üzerinde event bubbling durdurulabilir.

//! event.stopPropagation().

// document.querySelector("div").onclick = function (event) {
//   event.stopPropagation()
// }
