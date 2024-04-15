//? Named export

export const getCoins = (keyword) => {
  const API_KEY = "coinrankingd01c9edb142af9027921c61740c6c920fe249ba21d651cb7";
  const options = {
    headers: {
      "x-access-token": API_KEY,
    },
  };

  fetch("https://api.coinranking.com/v2/coins", options)
    .then((response) => response.json())
    .then((result) => console.log(result));
};
