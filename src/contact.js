const Contact = (() => {
    const createMain = () => {
        const container = document.querySelector('.content');
        const main = document.createElement('div');
        main.classList.add('main');
        container.appendChild(main);
    };

    const addLocation = () => {
        const container = document.querySelector('.main');
        const card = document.createElement('div');
        card.classList.add('card');
        const header = document.createElement('h2');
        header.textContent = 'Location';
        const street = document.createElement('p');
        street.textContent = '123 Taco Boulevard';
        const state = document.createElement('p');
        state.textContent = 'Austin, TX 12345';
        card.appendChild(header);
        card.appendChild(street);
        card.appendChild(state);
        container.appendChild(card);
    };

    const addNumber = () => {
        const container = document.querySelector('.main');
        const card = document.createElement('div');
        card.classList.add('card');
        const header = document.createElement('h2');
        header.textContent = 'Contact';
        const number = document.createElement('p');
        number.textContent = '123-456-7890';
        const email = document.createElement('p');
        email.textContent = 'tacopalace@tacos.com';
        card.appendChild(header);
        card.appendChild(number);
        card.appendChild(email);
        container.appendChild(card);
    };


    const displayPage = () => {
        createMain();
        addLocation();
        addNumber();
    };

    return {
        displayPage,
    };
})();

export default Contact;