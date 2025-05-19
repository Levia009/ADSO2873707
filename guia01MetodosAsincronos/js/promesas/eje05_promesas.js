document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const loadingMessage = document.getElementById('loading-message');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalDataContainer = document.getElementById('modal-data');
    const closeModalButton = document.getElementById('close-modal-button');

    const apiUrl = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';
    let apiData = []; // Para almacenar los datos de la API

    // --- Funciones del Modal ---
    function showModal(data) {
        modalDataContainer.innerHTML = ''; // Limpiar contenido anterior
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const p = document.createElement('p');
                // Formatear la clave para que sea más legible
                const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                p.innerHTML = `<strong>${formattedKey}:</strong> ${data[key]}`;
                modalDataContainer.appendChild(p);
            }
        }
        modalOverlay.classList.remove('hidden'); // Mostrar el modal
    }

    function hideModal() {
        modalOverlay.classList.add('hidden'); // Ocultar el modal
    }

    // --- Función para Mostrar los Datos en la Lista ---
    function displayDataList(data) {
        loadingMessage.style.display = 'none'; // Ocultar mensaje de carga
        dataContainer.innerHTML = ''; // Limpiar contenedor (por si acaso)

        if (!data || data.length === 0) {
            dataContainer.innerHTML = '<p>No se encontraron datos.</p>';
            return;
        }

        data.forEach((item, index) => {
            // Crear el contenedor para cada item
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('data-item');

            // Crear la parte de la información básica
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('item-info');
            infoDiv.innerHTML = `
                <strong>${item.alimento || 'N/A'}</strong>
                <span>${item.municipio || 'N/A'}, ${item.departamento || 'N/A'}</span>
                <span>Precio Prom: $${item.precio_promedio_por_unidad_de_medida || 'N/A'}</span>
            `;

            // Crear el botón de detalles
            const detailsButton = document.createElement('button');
            detailsButton.classList.add('details-button');
            detailsButton.textContent = 'Ver Detalles';
            // Guardamos el índice del elemento en el array original
            detailsButton.dataset.index = index;

            // Añadir evento al botón para mostrar el modal
            detailsButton.addEventListener('click', () => {
                const itemIndex = detailsButton.dataset.index;
                // Usamos el índice para obtener los datos completos del array original
                showModal(apiData[itemIndex]);
            });

            // Añadir info y botón al contenedor del item
            itemDiv.appendChild(infoDiv);
            itemDiv.appendChild(detailsButton);

            // Añadir el item al contenedor principal
            dataContainer.appendChild(itemDiv);
        });
    }

    // --- Función para Obtener Datos de la API ---
    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                // Si la respuesta no es exitosa (ej. 404, 500)
                throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json(); // Convertir la respuesta a JSON
            console.log("Datos recibidos:", data); // Ver los datos en la consola (útil para depurar)
            apiData = data; // Guardar los datos globalmente
            displayDataList(apiData); // Mostrar la lista

        } catch (error) {
            console.error("Error al obtener datos de la API:", error);
            loadingMessage.textContent = `Error al cargar datos: ${error.message}. Intenta recargar la página.`;
            loadingMessage.style.color = 'red';
            loadingMessage.style.fontWeight = 'bold';
        }
    }

    // --- Event Listeners para Cerrar el Modal ---
    closeModalButton.addEventListener('click', hideModal);
    // Cerrar el modal si se hace clic fuera del contenido (en el overlay)
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            hideModal();
        }
    });
    // Cerrar el modal con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
            hideModal();
        }
    });

    // --- Iniciar la Carga de Datos ---
    fetchData();
});