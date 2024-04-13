export const showUser = (data) => {
  const userSection = document.getElementById("app");

  data.forEach((user) => {
    userSection.innerHTML += `
            <h1>${user.login}</h1>
            <img src="${user.avatar_url}" alt="" width="200px" />
            <h3>${user.html_url}</h3>
          `;
  });
};

export const displayError = (err) => {
  const userSection = document.getElementById("app");
  userSection.innerHTML = `
          <h2>${err}</h2>
          <img src="./img/404.png" alt="error" />
        `;
};
