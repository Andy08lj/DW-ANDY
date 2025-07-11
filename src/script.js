const toggleButton = document.querySelector('.ST-MENU-TOGGLE');
const closeButton = document.querySelector('.ST-MENU-CLOSE');
const menu = document.querySelector('.ST-MENU');

if (toggleButton && menu && closeButton) {
    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('show');
    });

    closeButton.addEventListener('click', () => {
        menu.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', 'false');
    });

    // Cierra el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
            menu.classList.remove('show');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });
}
