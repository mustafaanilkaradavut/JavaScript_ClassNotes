//..      Selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

//..      Variables

let gelirler = 0;
let harcamaListesi = [];

//?     Ekle Formu

//__ HTML tarafından gelen bilgi hiç bir şey yapmazsak string olarak tanımlanır.

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //! reload u engellemek için
  gelirler = gelirler + Number(gelirInput.value);  //__ Burada HTML'den gelen string sayıyı Number yapmak için number ekleriz.
  ekleFormu.reset();
  // console.log(gelirler)
  localStorage.setItem("gelirler", gelirler);
  hesaplaVeGuncelle();
  // gelirinizTd.textContent = gelirler
});

//..      Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //! reload u engellemek için
  const yeniHarcama = {
    tarih: tarihInput.value,
    miktar: miktarInput.value,
    alan: harcamaAlaniInput.value,
    id: new Date().getTime(),
  };

  // console.log(yeniHarcama)
  harcamaListesi.push(yeniHarcama);
  // console.log(harcamaListesi)
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));
  harcamayiDomaYaz(yeniHarcama);

  harcamaFormu.reset();
  tarihInput.valueAsDate = new Date();
  hesaplaVeGuncelle();
});

//& Harcamayı Dom'a yaz

const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
  // const {id, miktar, tarih, alan} = yeniHarcama
  // console.log(id, miktar, tarih, alan)

  //! 1. yöntem (Eski ve güvenlik açığı nedeniyle kullanılmaması gereken)
  // harcamaBody.innerHTML += `
  //     <tr>
  //         <td>${tarih}</td>
  //         <td>${alan}</td>
  //         <td>${miktar}</td>
  //         <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
  //     </tr>

  // `
  //^ innerHTML kullandığımızda aşağıdaki kodları harcama alanına yazarsak istemediğimiz şekilde bir tablo düzeni ile karşılaşırız.
  //^ <h2>Hello World!</h2><p>Have a nice day!</p>
  //^ <img src="https://5.imimg.com/data5/VK/EK/UG/SELLER-101818061/danger-signs-500x500.jpg">

  //! 2. yöntem
  const tr = document.createElement("tr");

  const appendTd = (content) => {
    const td = document.createElement("td");
    td.textContent = content;
    return td;
  };

  const createLastTd = () => {
    const td = document.createElement("td");
    const iElement = document.createElement("i");
    iElement.id = id;
    iElement.className = "fa-solid fa-trash-can text-danger";
    iElement.type = "button";
    td.appendChild(iElement);
    return td;
  };

  tr.append(
    appendTd(tarih), //tarih td si
    appendTd(alan), //alan td si
    appendTd(miktar), //miktar td si
    createLastTd() // Çöp kutusu ve id yi ekler
  );

  harcamaBody.append(tr); //& son girileni alta ekler
  // harcamaBody.prepend(tr) //& son girileni öne ekler
};

//& hesaplaVeGuncelle

const hesaplaVeGuncelle = () => {
  const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  );

  // console.log(giderler)

  giderinizTd.textContent = giderler;
  gelirinizTd.textContent = gelirler;
  kalanTd.textContent = gelirler - giderler;
};

//? Event listeners

window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0; //! Local storage'den gelirleri al numberlaştır. Veri yoksa 0 ata.
  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || [];

  harcamaListesi.forEach((harcama) => {
    harcamayiDomaYaz(harcama);
  });

  gelirinizTd.textContent = gelirler;

  hesaplaVeGuncelle();
  tarihInput.valueAsDate = new Date();
});

harcamaBody.addEventListener("click", (e) => {
  // console.log(e.target.classList.contains("fa-trash-can"))

  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.remove();
    const id = e.target.id;
    harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != id);
    // console.log(harcamaListesi)
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));
  }
});

temizleBtn.addEventListener("click", () => {
  if (confirm("Tüm veriler silinecek. Devam etmek istiyor musun?")) {
    harcamaListesi = [];
    gelirler = 0;
    harcamaBody.innerHTML = "";
    // localStorage.clear() // Tüm localstorage i siler
    localStorage.removeItem("gelirler");
    localStorage.removeItem("harcamalar");
    hesaplaVeGuncelle();
  }
});
