import './style.css';
import MainPage from './home';

MainPage.displayPage();

const removeDOM = () => {
    const content = document.querySelector('.content');

    while(content.lastChild) {
        content.remove(lastChild);
    }
};