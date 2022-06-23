import Vegan from './images/1.jpg';
import Pork from './images/2.jpg';
import Barbacoa from './images/3.jpg';
import Chicken from './images/4.jpg';

const Menu = (() => {

    const createMain = () => {
        const container = document.querySelector('.content');
        const main = document.createElement('div');
        main.classList.add('main');
        container.appendChild(main);
    };

    const addMenuItem = (title, image) => {
        const container = document.querySelector('.main');
        const header = document.createElement('h2');
        header.textContent = title;
        const myImg = new Image();
        myImg.src = image;
        container.appendChild(header);
        container.appendChild(myImg);
    };

    const displayPage = () => {
        createMain();
        addMenuItem('Vegan Tacos', Vegan);
        addMenuItem('Pork Tacos', Pork);
        addMenuItem('Barbacoa Tacos', Barbacoa);
        addMenuItem('Chicken Tacos', Chicken);

    };

    return {
        displayPage,
    };
})();

export default Menu;