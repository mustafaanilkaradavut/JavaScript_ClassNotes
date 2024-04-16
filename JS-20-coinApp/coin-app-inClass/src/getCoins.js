//__ export default ile paylaşıldığı için süslü parantezsiz ve herhangi bir isimle import edilebilir.

import displayCoins from "./displayCoins";
import axios from "axios";

//?   Named export

export const getCoins = async (keyword) => {
  //__ async ekleyerek bunu asenkron bir fonksiyon haline getiriyoruz.
  const URL = `https://api.coinranking.com/v2/coins?search=${keyword}`;
  // const API_KEY = "coinrankingd01c9edb142af9027921c61740c6c920fe249ba21d651cb7";

  //   const options = {
  //     headers: { "x-access-token": API_KEY },
  //   }

  const options = {
    headers: { "x-access-token": import.meta.env.VITE_API_KEY },
  };

  try {
    const res = await axios(URL, options);
    // console.log(res.data.data.coins[0])

    if (!res.data.data.coins[0]) {
      alert("Coin can not be found");
    } else {
      displayCoins(res.data.data.coins[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
