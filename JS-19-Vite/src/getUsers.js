import { showUser, displayError } from "./UserError";

export const getUsers = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Something went wrong ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      showUser(data);
    })
    .catch((err) => displayError(err));
};
