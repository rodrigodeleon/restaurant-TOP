import * as pageLoad from "./mainLoad";
import "./style.css";
import getFoodMenu from "./menu";
import getHome from "./home";
import getContactInfo from './contact';

pageLoad.loadMainPage();
pageLoad.loadNav  ();

const main = document.querySelector("#main");
main.append(getHome()); 

const home = document.querySelector("#home");
const foodMenu = document.querySelector("#menu");
const contact = document.querySelector('#contact');


foodMenu.addEventListener(
  "click",
  function () {
    main.innerHTML = "";
    main.append(getFoodMenu());
  }
);

home.addEventListener(
  "click",
  function () {
    main.innerHTML = "";
    main.append(getHome());
  }
);

contact.addEventListener(
  "click",
  function () {
    main.innerHTML = "";
    main.append(getContactInfo());
  }
);
