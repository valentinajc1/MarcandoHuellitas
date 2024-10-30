document.addEventListener('DOMContentLoaded', function() {
    let selectPet = document.getElementById('pet');
    let selectEdad = document.getElementById('edad');

    // Función para aplicar los filtros
    function aplicarFiltros() {
        let petSeleccionada = selectPet.value;
        let edadSeleccionada = selectEdad.value;
        let itemsPets = document.querySelectorAll('.pet-adopt .tarjeta');

        itemsPets.forEach(function(item) {
            let petItem = item.dataset.pet; // Obtenemos el valor de data-pet
            let edadItem = item.dataset.edad; // Obtenemos el valor de data-edad

            if ((petSeleccionada === 'todos' || petSeleccionada === petItem) &&
                (edadSeleccionada === 'todos' || edadSeleccionada === edadItem)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    selectPet.addEventListener('change', aplicarFiltros);
    selectEdad.addEventListener('change', aplicarFiltros);
});
