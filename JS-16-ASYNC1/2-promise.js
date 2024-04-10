/* -------------------------------------------------------------------------- */
//..                              2 - Promises                                */
/* -------------------------------------------------------------------------- */

//? Promise, asenkron bir işlemin başarıyla ve başarısızlıkla bittiğini gösteren ve aynı zaanda başarıyla bittiğinde sonuç verilerini temsil eden bir nesne yapısıdır.

//__                SYTNAX

//* 1 - İlk olarak new promise() constructor'i ile yeni bir promise nesnesi oluşturulur,
//* 2 - Constructor'a asıl işlemin yapılmasını sağlayan bir executor fonksiyonu verilir.
//* 3 - Bunlar, Executor fonksiyouna ise 2 argument geçirilir: resolve ve reject fonksiyonlarıdır.
//* 4 - Resolve  fonksiyonu promise'in başarıyla bittiğinde, reject ise başarısızlıkla bittiğinde işletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//__ Bir Promise aşağıdaki state(durumları) içerebilir:

//* pending : ilk state, fulfilled veya rejected olmayan state'dir.
//* fulfilled : işlemin başarıyla tamamlandığını gösteren state'dir.
//* rejected : işlemin başarısızlıkla tamamlandığını gösteren state'dir.

//! Bir promise bir değerler tanımlayabilir yada bir sebeple (hata) iptal edebilir.
//! Bu durumlar then() ve catch() metotları ile yakalanabilir.

//? then() ve catch() metotları promise döndürürler.
//? Zincirleme olarak kullanılabilirler.

console.log("Promise");

const request = new Promise((resolve, reject) => {
  const data = { name: "Can", surname: "Canan" }; //__ mock data    :  API hazır olmadığında benzerini localden sanki oradan geliyormuş gibi kod oluşturmak.

  const success = Math.floor(Math.random() * 5); //__ 0 1 2 3 4

  if (success) {
    resolve(data);
  } else {
    reject("Something went wrong");
  }
});

request
  .then((res) => {
    //? başarılı durumları işlemek için then() metotları kullanıılır.
    console.log(res);
    return res;
  })
  .then((data) => console.log(data.name)) //? zincirleme olarak kullanmak mümkündür. Ancak verinin bir sonraki then'e aktarılması gereklidir.
  .catch((err) => document.write(err)) //? hatayı handle etmek için catch kullanılr.
  .finally(() => console.log("finally always works !!")); //? bağlantıyı sonlandırma.
