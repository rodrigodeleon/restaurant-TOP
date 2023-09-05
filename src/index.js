
let content = document.querySelector('#content');
const header = document.createElement('div');
const main = document.createElement('div');
const footer = document.createElement('div');

header.setAttribute('id','header');
header.innerHTML = 'test';
main.setAttribute('id','main');
footer.setAttribute('id','footer');

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);

