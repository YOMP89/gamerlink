document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const toggleButton = document.getElementById('toggle-button');
    const hiddenIcons = document.querySelectorAll('.hidden');
    
    // Simular obtención del nombre desde un API o fuente externa
    const personName = "John Doe"; // Puedes reemplazar este nombre por otro obtenido de una API
    nameElement.textContent = personName;
    
    // Funcionalidad para el acordeón
    let isExpanded = false;
    toggleButton.addEventListener('click', () => {
        isExpanded = !isExpanded;

        hiddenIcons.forEach(icon => {
            if (isExpanded) {
                icon.style.display = 'flex';
            } else {
                icon.style.display = 'none';
            }
        });

        toggleButton.textContent = isExpanded ? '-' : '+';
    });
});
