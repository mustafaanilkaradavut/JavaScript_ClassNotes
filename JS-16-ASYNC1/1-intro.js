/* -------------------------------------------------------------------------- */
//..                     1- Senkron-Asenkron Programlama                      */
/* -------------------------------------------------------------------------- */

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//__            Asenkron Programlama

//? Asenkron Programlama, bir alt görevin uygulamanın asıl thread'inden bağımsız olarak arka planda çalıştırılmasına izin veren paralel programlanma tekniğidir.
//? Bu alt görev tamamlandığında (başarıda veya başarısızlıkta) asıl thread bu konuda bilgilendirir.
//? Asenkron programlama, uygulamaların performanslarının artırılmasına ve daha iyi kullanıcı deneyimine katkı sağlamaktadır.
//? Özellikle bir API'den veya veritabanından veri çekme, giriş/çıkış işlemleri, dosya okuma/yazma işlemleri gibi zaman tüketen kodlarda ASYN Programlama kullanılması çok önemlidir.

//__            Senkron

// const gecikme = (sure) => {
//   //* Senkron blocking code, uygulama'da takılmalara ve yavaşlamaya sebep olur.
//   const basla = new Date().getTime()
//   while (new Date().getTime() < basla + sure) {}
// }

// console.log("Senkron")
// alert("Blocking") //* Senkron çalışmada bir komut cok uzun sürer ise uygulamayı bloklar.
// console.time("timer")
// gecikme(2000)
// console.timeEnd("timer") //* console.time ve console.timeEnd ile debug amaçlı olarak kullanıp ölçüm yapabiliriz.

// console.log("FS16")

//!             Asenkron (setTimeout()) - Belirli süre sonraya zaman kurar.

// const timeoutID = setTimeout(() => {
//   console.log("Timeout1 doldu")
// }, 2000) //* en az 2000ms sonra fonksiyonu çağır komutu veriyoruz.

// setTimeout(() => {
//   console.log("Timeout2 doldu")
// }, 1000)

// console.log("Start")

// setTimeout(() => {
//   clearTimeout(timeoutID)
// }, 500)

// console.log("Uygulama bitti")

//__         Asenkron (setInterval, clearInterval) - Periyodik bir aralık belirler..!

// let sayac = 0

// const intervalId = setInterval(() => {
//   console.log(++sayac)
//   if (sayac >= 5) {
//     clearInterval(intervalId)
//   }
// }, 1000)

//! Callback Hell (nested ve birbirine bağlı callback'ler)

//* Eğer birbirine bağımlı asenkron kodların yazılması gerekirse, nested callback yapısının kullanılması gerekebilir.
//* Fakat bu iyi bir programlama yaklaşımı değildir.
//? !callback hell olarak adlandırılan bu yapının anlaşılması ve sürdürülebilirliği oldukça zordur.

setTimeout(() => {
  console.log("john:Hi"); //? veri isteği (req)
  setTimeout(() => {
    console.log("Sarah: Hello"); //? res geliyor
    setTimeout(() => {
      console.log("John: How Are you?"); //? veri gonder
      setTimeout(() => {
        console.log("Sarah:Fine and you?"); //?gondermeye baslaniyor
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//__         ÇÖZÜMLER:

//* 1- XMLHttpRequest (Eski yöntem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise (Custom async kod yazmak için elverişli- Advance)

//__ Güncel methodlar : 
//! 3- Fetch API (Promise'in basitlestirilmis hali)       
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
 