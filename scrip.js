document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product button');
    
    buyButtons.forEach(button => {
        let isTrembling = false;
        let originalTransform = '';

        button.addEventListener('mouseenter', () => {
            if (!isTrembling) {
                isTrembling = true;
                originalTransform = button.style.transform;
                button.style.transition = 'transform 0.1s ease-in-out'; // Transición suave

                // Crear y añadir el efecto de gota naranja
                const drop = document.createElement('span');
                drop.classList.add('drop');
                button.appendChild(drop);

                // Aplicar temblor con intervalos cortos
                const interval = setInterval(() => {
                    const deg = Math.random() * 4 - 2; // Rango de rotación aleatoria
                    button.style.transform = `rotate(${deg}deg)`;
                }, 50);

                // Detener el temblor después de un tiempo
                setTimeout(() => {
                    clearInterval(interval);
                    button.style.transform = originalTransform; // Restaurar transformación original
                    button.removeChild(drop); // Eliminar la gota naranja
                    isTrembling = false; // Reiniciar flag para permitir otro temblor
                }, 500);
            }
        });

        button.addEventListener('mouseleave', () => {
            button.style.transition = 'transform 0.1s ease-in-out'; // Transición suave al salir
            button.style.transform = 'none'; // Restaurar transformación original
        });
    });

    // Evento al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;

        // Cambiar el color del fondo del encabezado al hacer scroll
        if (scrollPosition > 0) {
            header.style.backgroundColor = 'rgba(76, 175, 80, 0.9)'; // Fondo semi-transparente al hacer scroll
        } else {
            header.style.backgroundColor = 'rgba(76, 175, 80, 1)'; // Fondo sólido en la parte superior de la página
        }

        // Efecto parallax para el fondo de la sección hero
        const hero = document.querySelector('.hero');
        hero.style.backgroundPositionY = `${-scrollPosition / 2}px`;
    });
});
