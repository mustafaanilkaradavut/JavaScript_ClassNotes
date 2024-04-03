//__    Pc'ye 1-20 arasında bir sayı seçmesini sağlayan kod dizini.

let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

/* -------------------------------------------------------------------------- */

let message = document.querySelector(".msg");
//__    Skoru index.html'den çekebilirdik. Ama çok kullanacağımız için bu daha çok tercih edilin bir yoldur.
let score = 10;
// let highScore = 0;

//__ localstrage'ye kaydettiğimiz değeri sürekli okumak ve sayfa yenilendiğinde kaybetmemek için aşağıdaki kod dizimini yazarız.

let highScore = localStorage.getItem("top-score") || 0;
//* Buradaki sıfır değeri eğer bir high score yoksa 0 getirmesini istediğimizdir.

document.querySelector(".top-score").textContent = highScore;
//* Browser'da değeri local storage'den okuyarak günceller. özellikle 2. ve 3. oyuncular için gerekli.

/* -------------------------------------------------------------------------- */

document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;
  //   console.log(guess);

  //! Tahmin girilmemiş ise verilecek olan alerti temsil eder.
  if (!guess) {
    message.textContent = "Please enter a Number..!";
    //! Tahmin doğru ise ;
  } else if (guess == randomNumber) {
    message.textContent = "Congrats ! You find number...😁";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".check").disabled = true;
    //..              Top Score kontrolü yaparız.;
    if (score > highScore) {
      localStorage.setItem("top-score", score);

      highScore = score;
      document.querySelector(".top-score").textContent = score;
    }
  } else {
    //! Tahmin eğer yanlış ise;
    //** Skor 1'den büyük olduğu sürece hakkımız var. */
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      guess < randomNumber
        ? (message.textContent = "Our Number more than you choose")
        : (message.textContent = "Our Number less than you choose");
    } else {
      //?     GAME OVER
      message.textContent = " You Lose The Game 🤯 ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

//__ Again butonuna basınca ayarlar başlangıç değerlerine kurulsun. Arka plan #2d3436 olsun.

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";
  randomNumber = Math.ceil(Math.random() * 20);
  console.log("New Random Number", randomNumber);
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  message.textContent = "Game START for new player... ";
  document.querySelector(".check").disabled = false;
};

//__ Enter tuşunun çalışması için tanımlamak.

document.addEventListener("keydown", (e) => {
  //   console.log(e.key);
  if (e.key === "Enter") {
    document.querySelector(".check").click();
  }
});

//__ Geçersiz sayı girdiniz 1-20 arasında bir sayı giriniz.

document.querySelector(".check").addEventListener("click", () => {
  guess = document.querySelector(".guess").value;

  const guessNumber = parseInt(guess);

  if (!isNaN(guessNumber) && guessNumber >= 1 && guessNumber <= 20) {
    // Doğru sayı girilmişse oyunu devam ettir.
  } else {
    message.textContent = "Your Number not allowed. Please enter between 1-20.";
    score++; // Eğer sayı geçersizse, skoru arttırıyoruz.
    document.querySelector(".score").textContent = score;
    // Skoru güncelliyoruz.
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "brown";
  }
});
