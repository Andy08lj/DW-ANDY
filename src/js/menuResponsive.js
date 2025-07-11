const toggleButton = document.querySelector('.ST-MENU-TOGGLE');
const closeButton = document.querySelector('.ST-MENU-CLOSE');
const menu = document.querySelector('.ST-MENU');

// Función para mostrar u ocultar los botones según el tamaño de la pantalla
function handleResize() {
    if (window.innerWidth > 768) {
        toggleButton.style.display = 'none'; // Oculta el botón toggle en pantallas grandes
        closeButton.style.display = 'none'; // Oculta el botón de cierre en pantallas grandes
        menu.classList.remove('show'); // Asegúrate de cerrar el menú
        toggleButton.setAttribute('aria-expanded', 'false');
    } else {
        toggleButton.style.display = 'block'; // Muestra el botón toggle en pantallas pequeñas
        closeButton.style.display = 'block'; // Muestra el botón de cierre en pantallas pequeñas
    }
}

// Ejecuta la función al cargar la página
handleResize();

// Escucha los cambios en el tamaño de la ventana
window.addEventListener('resize', handleResize);

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



//Programar la tienda:

