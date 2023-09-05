const content = document.querySelector("#content");
const main = document.querySelector("#main");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

function loadMainPage() {
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");

  header.setAttribute("id", "header");
  main.setAttribute("id", "main");
  footer.setAttribute("id", "footer");
  footer.textContent = "The Restaurant 2023";
  content.append(header, main, footer);
}

function loadMainMenu() {
  const header = document.querySelector("#header");
  const menu = document.createElement("div");
  const home = document.createElement("div");
  const contact = document.createElement("div");
  menu.classList.add("headerNav");
  menu.setAttribute("id", "menu");
  home.classList.add("headerNav");
  home.setAttribute("id", "home");
  contact.classList.add("headerNav");
  contact.setAttribute("id", "contact");

  menu.textContent = "Menu";
  home.textContent = "Home";
  contact.textContent = "Contact";

  header.append(menu, home, contact);
}

export { loadMainPage, loadMainMenu };
