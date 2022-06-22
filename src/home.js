const MainPage = (() => {
    const createTabs = () => {
        const container = document.querySelector('.content');
        const tabs = document.createElement('div');
        tabs.classList.add('tabs');
        
        const homeBtn = document.createElement('button');
        homeBtn.textContent = 'Home';
        
        const menuBtn = document.createElement('button');
        menuBtn.textContent = 'Menu';
        
        const contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact';

        tabs.appendChild(homeBtn);
        tabs.appendChild(menuBtn);
        tabs.appendChild(contactBtn);
        container.append(tabs);
    };

    const createMain = () => {
        const container = document.querySelector('.content');
        const main = document.createElement('div');
        main.classList.add('main');
        container.appendChild(main);
    };

    const createTitle = () => {
        const container = document.querySelector('.main');
        const section = document.createElement('div');
        section.classList.add('title');
        const title = document.createElement('h1');
        title.textContent = "Taco Palace";
        section.appendChild(title);
        container.appendChild(section);
    };

    const createSubTitle = () => {
        const container = document.querySelector('.main');
        const section = document.createElement('div');
        section.classList.add('subtitle');
        const subtitle = document.createElement('p');
        subtitle.textContent = "The guac isn't extra";
        section.appendChild(subtitle);
        container.appendChild(section);
    };

    const createHours = () => {
        const container = document.querySelector('.main');
        const section = document.createElement('div');
        section.classList.add('card');
        const title = document.createElement('h1');
        title.textContent = "Hours";
        const sunday = document.createElement('p');
        sunday.textContent = 'Sunday: 8am - 5pm';
        section.appendChild(sunday);
        const monday = document.createElement('p');
        monday.textContent = 'Monday: 8am - 10pm';
        section.appendChild(monday);
        const tuesday = document.createElement('p');
        tuesday.textContent = 'Tuesday: 8am - 10pm';
        section.appendChild(tuesday);
        const wednesday = document.createElement('p');
        wednesday.textContent = 'Wednesday: 8am - 10pm';
        section.appendChild(wednesday);
        const thursday = document.createElement('p');
        thursday.textContent = 'Thursday: 8am - 10pm';
        section.appendChild(thursday);
        const friday = document.createElement('p');
        friday.textContent = 'Friday: 8am - 10pm';
        section.appendChild(friday);
        const saturday = document.createElement('p');
        saturday.textContent = 'Saturday: 8am - 10pm';
        section.appendChild(saturday);
        container.appendChild(section);
    };

    const createTestimonials = () => {
        const container = document.querySelector('.main');
        const section = document.createElement('div');
        section.classList.add('card');
        const testimonial = document.createElement('p');
        testimonial.textContent = `"Gee wiz they really do have the best tacos." -Customer`;
        section.appendChild(testimonial);
        const testimonial2 = document.createElement('p');
        testimonial2.textContent = `"Lol I don't think I've ever seen free guacamole before." -Another Customer`;
        section.appendChild(testimonial2);
        container.appendChild(section);
    };

    const displayPage = () => {
        createTabs();
        createMain();
        createTitle();
        createSubTitle();
        createHours();
        createTestimonials();
    };
    
    return {
        displayPage,
    }
})();

export default MainPage;