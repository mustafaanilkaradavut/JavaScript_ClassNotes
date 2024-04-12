console.log("APP JS");

//?     Global Registration yöntemi ile kodları parçalara ayırma işlemi:

const h1 = document.querySelector("h1");
h1.textContent = "Without module";

const students = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

const products = [
  {
    phone: "Iphone",
    type: "15Pro",
    price: 50000,
  },
  {
    phone: "Samsung",
    type: "S23",
    price: 40000,
  },
  {
    phone: "Huawei",
    type: "Mate60",
    price: 45000,
  },
];

console.log("Total Price:", totalPrice(products));

//? Uygulamalar büyüdükçe kodlari tek bir JS dosyasına koymak bu kodun sürdürülebilirliğini ve anlaşılabiliriliğini imkansız hale getirmeye başlar.

//* Çözüm: Kodlari yaptiği işe göre ayrı JS dosyalarina bölmek.

//! Ancak, bölme işleminden sonra başka JS dosyasında olan bir kodu (değişken,array ,obje, fonksiyon, class v.b) bir JS kodu içerisinde kullanabilmek için tüm JS kodlarının scriptlerini HTML içerisine eklemek gerekir.

//! Script'ler eklenirken sırası önem arz etmektedir.

//! Başka önemli bir husus da bu şekilde bir bölme işleminde global ad-uzayi (namespace) kullanildiği için bir değişken tüm dosyalar için bir kere tanımlanabilir.
