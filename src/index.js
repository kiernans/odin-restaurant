import './style.css';
import MainPage from './home';
import Menu from './menu';
import Contact from './contact';


const removeDOM = () => {
    const main = document.querySelector('.main');
    main.remove();
};

const addListeners = () => {
    const tabs = document.querySelectorAll('.tabs button');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            if(document.querySelector('.main')) removeDOM();
            if(tab.textContent === 'Home') MainPage.displayPage();
            if(tab.textContent === 'Menu') Menu.displayPage();
            if(tab.textContent === 'Contact') Contact.displayPage(); 
        });
    });
};


MainPage.createTabs();
MainPage.displayPage();
addListeners();





