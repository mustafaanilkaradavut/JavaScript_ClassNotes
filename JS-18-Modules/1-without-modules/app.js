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

//? Uygulamalar büyüdükçe kodları tek bir JS dosyasına koymak bu kodun sürdürülebilirliğini ve anlaşılabilirliğini imkansız hale getirmeye başlar.

//* Çözüm: Kodları yaptığı işe göre ayrı JS dosyalarına bölmek.

//__  Ancak bölme işleminden sonra başka JS dosyasında olan bir kodu (değişken, array, oje, fonksiyon, class v.b.) bir Js kodu içerisinde kullanabilmek için tüm JS kodlarının scriptlerini HTML içerisine eklemek gerekir.

//__ Script'ler eklenirken sırası önem arz etmektedir.

//__ Başka önemli bir husus da bu şekilde bir bölme işleminde global ad-uzayı (namespace) kullanılabildiği için bir değişken tüm dosyalar için bir kere tanımlanabilir.
