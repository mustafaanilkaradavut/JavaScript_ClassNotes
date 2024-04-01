console.log("**** TRAVERSING DOM ****");

/* -------------------------------------------------------------------------- */
//..                             TRAVERSING DOM                               */
/* -------------------------------------------------------------------------- */

//? Bir HTML elementi üzerinden başka elementleri seçmemize, DOM traversing denilir.
//? Özellikle dinamik olarak değişen (silme veya yeni ekleme gibi) HTML elemanlarını seçerken gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? 1 - Yukarı yönde (Parent)
//? 2 - Aşağı yönde (children)
//? 3 - Yatay yönde (Sibling)

//* 1 - Yukari Yönde Traverse
//*----------------------------------------------
//! parentElement, parentNode

const h2 = document.getElementById("add-new-item");

console.log(h2.parentNode);
console.log(h2.parentElement); //? section.add-item (htmle kadar çıkabilir.)
console.log(h2.parentNode.parentNode.parentNode); //? body (document'e kadar çıkabilir.)

//? Bulunduğumuz yer;
const htmlLi = document.querySelector("ul li:nth-child(1)");
console.log(htmlLi);

console.log(htmlLi.parentNode.parentNode); //? section.item-list

console.log(htmlLi.closest("section.item-list")); //? section.item-list
console.log(htmlLi.closest("section.add-item")); //? null

console.log(htmlLi.closest("main").querySelector("section.add-item")); //? section.add-item

//* 2 - Asagi Yönde Traverse
//*----------------------------------------------
//! Children, firstElementChild, lastElementChild

const section = document.querySelector("section.add-item");
console.log(section);

console.log(section.firstElementChild); //? h2
console.log(section.firstChild); //? text yazı içeren html elementlerinin yazısına erişir.

console.log(section.lastElementChild);

console.log(section.children); //? tüm çocuklarını HTML Collection olarak döner.
//? HTMLCollection(3) [h2#add-new-item, input#input, input#btn, add-new-item: h2#add-new-item, input: input#input, btn: input#btn]

//* 3 - Yatay Yönde Traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling

console.log(htmlLi.nextElementSibling.innerText); // CSS
console.log(htmlLi.nextElementSibling.nextElementSibling.innerText);
console.log(
  htmlLi.nextElementSibling.nextElementSibling.previousElementSibling.innerText
);
