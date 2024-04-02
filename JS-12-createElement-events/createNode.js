console.log("**** CREATE NODE ****");

//__ 1 - Yeni bir li elementi oluştururuz.
const newLi = document.createElement("li");

//__ 2 - Eğer text tabanlı bir element ise text düğümü oluştururuz.
const textLi = document.createTextNode("Go");

//?__ 3 - Oluşurulan text duğümünü yeni elemente bağlarız. (append)
newLi.appendChild(textLi);

//__ 4 - Yeni oluşan elementi DOM tree'ye ekleriz.
document.querySelector("ul").appendChild(newLi);

/* -------------------------------------------------------------------------- */

//.. 2. bir "li" oluşturalım.
const newLi2 = document.createElement("li");
newLi2.textContent = "C++";

//? element.before() veya element.after() ile bir elementi istediğimiz elementin önüne veya devamına eklemek mümkündür.
const react = document.querySelector("ul li:nth-child(4)");
react.before(newLi2, newLi);

/* -------------------------------------------------------------------------- */
//..                    ID, CLASS GIBI OZELLIKLERI ATAMA                      */
/* -------------------------------------------------------------------------- */

//__ 1 - element.attribute = "yeni değer"

//* yazma
newLi.className = "list bold text-success bg-warning";
newLi.id = "new-li";
newLi.name = "list";

//* okuma
console.log(newLi.className);

//__ 2 - setAttribute(atr,"değer") getAttrbute("atr")

newLi2.setAttribute("class", "list red bold");

console.log(newLi2.getAttribute("id"));
console.log(newLi2.getAttribute("class"));

//! Eğer aşğı tarafa newLi.className adında farklı bir veri tanımlarsak, tanımladığımız veriler öncekinin üstüne yazar.
//! Bunun için classList özelliği kullanarak önceki verilerin ezilmesini engelleriz.

//__ 3 - Yöntem (classList)
newLi.classList.add("border", "border-danger", "border-3"); //* Üzerine ekleme yapar. Eski veri korunur.

newLi.classList.remove("bold", "text-success");

console.log(newLi2.classList.contains("red")); //* içerisindeki class'ın olup olmadığını bize gösterir.

newLi.classList.toggle("red"); //* Bu attribute ile eğer red class'ı yoksa ekler, var ise siler.
newLi2.classList.toggle("red"); //! Aç kapa mantığının olduğu (button gibi) yerlerde toggle kullanırız.

/* -------------------------------------------------------------------------- */
//..                 YENI BIR ELEMENT OLUSTURMA (InnerHTML)                   */
/* -------------------------------------------------------------------------- */

//__ Eğer kodu ezmek istiyorsak = işareti kullanırız, eğer ekleme yapmak istiyorsak += işareti kullanmalıyız. Back Tick kullanmalıyız. (option + ",")

document.querySelector("main").innerHTML += `
    <div class="d-flex gap-2">
        <input type="text" class="form-control"/>
        <button class="btn btn-danger">Submit</button>
    </div>

    <div class="card mt-4" style="width: 13rem;">
        <img src='https://images.pexels.com/photos/19789774/pexels-photo-19789774/free-photo-of-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=300' class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`;
