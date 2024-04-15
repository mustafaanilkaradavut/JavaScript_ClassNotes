//? export defatul ile paylaşıldığı için süslü parantezsiz ve herhangi bir isimle import edilebilir.
import displayCoins from "./displayCoins";

//? Named export

export const getCoins = async (keyword) => {
  //__ async ekleyerek bunu asenkron bir fonksiyon haline getiriyoruz.
  const API_KEY = "coinrankingd01c9edb142af9027921c61740c6c920fe249ba21d651cb7";
  const URL = "https://api.coinranking.com/v2/coins";

  const options = {
    headers: { "x-access-token": API_KEY },
  };

  try {
    const res = await fetch(URL, options);
    const json = await res.json();

    if (!json.data.coins[0]) {
      alert("Coin can not be found");
    } else {
      displayCoins(); //? displayCoins.js
    }
  } catch (error) {
    console.log(error);
  }
};
