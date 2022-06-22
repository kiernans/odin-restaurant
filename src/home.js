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
    }
    
    return {
        createTabs,
    }
})();