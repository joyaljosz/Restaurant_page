import {homes}  from "./home";
import {createAbout} from "./about"
import {createMenu} from "./menu"

// createAbout();
// createMenu();

const content = document.getElementById('content');

const homebt = document.getElementById('homebtn');

const aboutbt = document.getElementById('aboutbtn');

const menubt =   document.getElementById('menubtn');

const loadHome = () => {
    content.innerHTML = '';
    const hum = homes();
    content.appendChild(hum);
}

const loadAbout = () => {
    content.innerHTML = '';
    const about = createAbout();
    content.appendChild(about);
}

const loadMenu = () => {
    content.innerHTML = '';
    const menu = createMenu();
    content.appendChild(menu);
}

homebt.addEventListener('click', () => {
    loadHome();
});


aboutbt.addEventListener('click', () => {
    loadAbout();
});


menubt.addEventListener('click', () => {
    loadMenu();
});

loadHome();