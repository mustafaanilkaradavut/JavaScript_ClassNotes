//__    Pc'ye 1-20 arasında bir sayı seçmesini sağlayan kod dizini.

let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

/* -------------------------------------------------------------------------- */

let message = document.querySelector(".msg");
//__    Skoru index.html'den çekebilirdik. Ama çok kullanacağımız için bu daha çok tercih edilin bir yoldur.
let score = 10;
let highScore = 0;

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
    //? Top Score kontrolü yaparız.;
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
};


//__ 