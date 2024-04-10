/* -------------------------------------------------------------------------- */
//..                              3 - FETCH API                               */
/* -------------------------------------------------------------------------- */

//? Dış kaynaklardan veri getirmek için kulanılan basit bir arabirimdir.
//? Ağ istekleri yapmamızı ve cevapları yönetebilmemize olanak sağlar.
//? Javascript ortamında en çok kullanılan Asenkron işlem örneklerinin başında gelmektedir.

//__ fetch() fonksiyonu veri getirmek istediğiniz kaynağın yolunu gösteren zorunlu bir parametre almaktadır ve bu isteğin cevabını gösteren bir Promise döndürmektedir.

console.log("FETCH");

// let userData = ""
fetch("https://api.github.com/users")
  .then((res) => {
    console.log(res);
    //? Fetch api'da hatayı bizim yakalamamız gerekiyor.
    if (!res.ok) {
      throw new Error(`Something went wrong ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    // console.log(data)
    // userData = data
    // console.log(userData)
    showUser(data);
  })
  .catch((err) => displayError(err));

const showUser = (data) => {
  console.log(data);
  const userSection = document.getElementById("users");

  data.forEach((user) => {
    userSection.innerHTML += `
      <h1>${user.login}</h1>
      <img src="${user.avatar_url}" alt="" width="200px" />
      <h3>${user.html_url}</h3>
    `;
  });
};

const displayError = (err) => {
  const userSection = document.getElementById("users");
  userSection.innerHTML = `
    <h2>${err}</h2>
    <img src="./img/404.png" alt="error" />
  `;
};
