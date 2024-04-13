import { getUsers } from "./src/getUsers";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Hello FS16 and Vite</h1>
    
`;

window.addEventListener("load", () => {
  getUsers();
});
