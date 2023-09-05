export default function getFoodMenu() {
  const starters = ["Salad   -   USD 8", "Chips   -   USD 7", "Croquettes   -   USD 9"];
  const mains = ["Chicken   -   USD 9", "Beef   -   USD 11", "Fish   -   USD 12"];
  const desserts = ["Cake   -   USD 7", "Flan   -   USD 6", "Icecream   -   USD 5"];
  const menuContent = document.createElement("div");
  const menuStarters = createMenuSection("Starters", starters);
  const menuMains = createMenuSection("Main Dishes", mains);
  const menuDesserts = createMenuSection("Desserts", desserts);
  menuContent.append(menuStarters, menuMains, menuDesserts);

  return menuContent;
}

function createMenuSection(sectionName, menuItems) {
  const menuSection = document.createElement("ul");
  const menuTittle = document.createElement('li');
  menuTittle.classList.add('menuTittle');
  menuTittle.textContent = sectionName;
  menuSection.appendChild(menuTittle);
  menuItems.forEach((element) => {
    const item = document.createElement("li");
    item.textContent = element;
    menuSection.appendChild(item);
  });
  return menuSection;
}
