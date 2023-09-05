import * as pageLoad from "./mainLoad";
import "./style.css";
import getFoodMenu from "./menu";

pageLoad.loadMainPage();
pageLoad.loadMainMenu();
const main = document.querySelector("#main");
const foodMenu = document.querySelector("#menu");

foodMenu.addEventListener(
  "click",
  function () {
    main.innerHTML = "";
    main.append(getFoodMenu());
  }
);


