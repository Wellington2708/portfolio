const containerHeader = document.querySelector('.container__header');
const divImgHeader = document.createElement('div');
const imgHeader = document.createElement('img');

imgHeader.classList.add('container__logo');
imgHeader.src = "assets/image/logo.png";
imgHeader.alt = "Logo Wellington Junior Developer Front-End";
divImgHeader.appendChild(imgHeader);
containerHeader.appendChild(divImgHeader);

const divDate = document.createElement('div');
divDate.classList.add('date');
containerHeader.appendChild(divDate);


const dateToday = new Date();
let day = String(dateToday.getDate()).padStart('0');
let month = String(dateToday.getMonth() + 1).padStart(2, '0');
let year = String(dateToday.getFullYear());


const date = document.querySelector('.date').innerHTML =`${ "Date: " + year + " / "+ month + "/ "+ day}`;


const divNavegation = document.createElement('div');
divNavegation.classList.add('container__navegation');
const unorderedListHeader = document.createElement('ul');
unorderedListHeader.classList.add('container__list');


function createListItem(text, href){
const listItem = document.createElement('li');
const linkItem = document.createElement('a');
linkItem.textContent = text;
linkItem.setAttribute('href' , href);
linkItem.classList.add('container__list__item');
listItem.appendChild(linkItem);
return listItem;

}

const menuItems = [
    { text: 'About Me', href: '#aboutMe' },
    { text: 'Certificates', href: '#container__certificates' },
    { text: 'Graduation', href: '#graduation' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contacts', href: '#contacts' }
];

menuItems.forEach(item => {
    const listItem = createListItem(item.text , item.href);
    unorderedListHeader.appendChild(listItem);
})

divNavegation.appendChild(unorderedListHeader);
containerHeader.appendChild(divNavegation);