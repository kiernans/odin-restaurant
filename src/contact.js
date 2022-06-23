const Contact = (() => {
    const createMain = () => {
        const container = document.querySelector('.content');
        const main = document.createElement('div');
        main.classList.add('main');
        container.appendChild(main);
    };


    const displayPage = () => {
        createMain();
    };

    return {
        displayPage,
    };
})();

export default Contact;