// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- SIMULACIÓN DE DATOS DE LA API ---
    // En un caso real, aquí harías una llamada fetch a la URL de la API.
    // Como no podemos llamar a CoinMarketCap directamente desde aquí,
    // usamos datos de ejemplo fijos.
    const mockApiData = {
        data: [
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                quote: {
                    USD: {
                        price: 65000.50,
                        percent_change_24h: 2.5
                    }
                }
            },
            {
                id: 1027,
                name: "Ethereum",
                symbol: "ETH",
                quote: {
                    USD: {
                        price: 3500.75,
                        percent_change_24h: -1.2
                    }
                }
            },
            {
                id: 825,
                name: "Tether",
                symbol: "USDT",
                 quote: {
                    USD: {
                        price: 1.00,
                        percent_change_24h: 0.01
                    }
                }
            },
             {
                id: 5426,
                name: "Solana",
                symbol: "SOL",
                 quote: {
                    USD: {
                        price: 150.22,
                        percent_change_24h: 5.8
                    }
                }
            }
        ]
    };
    // --- FIN DE SIMULACIÓN ---

    // Obtenemos referencias a los elementos HTML donde mostraremos los datos
    const container = document.getElementById('crypto-container');
    const loadingMessage = document.getElementById('loading');

    // Función para mostrar los datos en el HTML
    function displayCryptoData(data) {
        // 1. Ocultar el mensaje de "Cargando..."
        loadingMessage.style.display = 'none';

        // 2. Limpiar cualquier contenido previo (por si acaso)
        container.innerHTML = '';

        // 3. Recorrer cada criptomoneda en los datos recibidos
        data.forEach(crypto => {
            // Crear los elementos HTML para cada cripto
            const cryptoDiv = document.createElement('div');
            cryptoDiv.classList.add('crypto-item'); // Añadir clase CSS

            const nameElement = document.createElement('h2');
            nameElement.textContent = crypto.name;

            const symbolElement = document.createElement('span');
            symbolElement.classList.add('symbol');
            symbolElement.textContent = `(${crypto.symbol})`;
            nameElement.appendChild(symbolElement); // Poner el símbolo junto al nombre

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('crypto-details');

            const priceElement = document.createElement('p');
            priceElement.classList.add('price');
            // Formatear el precio a 2 decimales y añadir símbolo $
            priceElement.textContent = `$${crypto.quote.USD.price.toFixed(2)}`;

            const changeElement = document.createElement('p');
            changeElement.classList.add('change');
            const change = crypto.quote.USD.percent_change_24h;
            // Añadir clase 'positive' o 'negative' según el cambio y formatear
            changeElement.textContent = `${change.toFixed(2)}% (24h)`;
            if (change >= 0) {
                changeElement.classList.add('positive');
            } else {
                changeElement.classList.add('negative');
            }

            // Añadir precio y cambio al div de detalles
            detailsDiv.appendChild(priceElement);
            detailsDiv.appendChild(changeElement);


            // Añadir el nombre y los detalles al div principal del item
            cryptoDiv.appendChild(nameElement);
            cryptoDiv.appendChild(detailsDiv);

            // Añadir el div del item completo al contenedor principal
            container.appendChild(cryptoDiv);
        });
    }

    // Función para simular un retraso (como si se estuviera llamando a la API)
    function fetchDataSimulator() {
        console.log("Simulando llamada a API...");
        setTimeout(() => {
            console.log("Datos recibidos (simulados).");
            // Llamamos a la función para mostrar los datos simulados
            displayCryptoData(mockApiData.data);
        }, 1500); // Espera 1.5 segundos para simular la carga
    }

    // --- INICIO: Cómo sería con una API REAL (usando fetch) ---
    /*
    const apiKey = 'TU_API_KEY_AQUI'; // ¡NUNCA pongas tu API Key real aquí en código público!
    const apiUrl = 'URL_REAL_DE_LA_API'; // Por ejemplo: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10'

    fetch(apiUrl, {
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`); // Manejar errores de red
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        console.log("Datos recibidos de la API real:", data);
        if (data && data.data) {
            displayCryptoData(data.data); // Mostrar los datos reales
        } else {
             throw new Error('La estructura de datos recibida no es la esperada.');
        }
    })
    .catch(error => {
        console.error("Error al obtener datos de la API:", error);
        loadingMessage.textContent = `Error al cargar datos: ${error.message}`;
        loadingMessage.style.color = 'red';
        loadingMessage.style.display = 'block'; // Asegurarse que el mensaje de error se vea
         container.innerHTML = ''; // Limpiar el contenedor si hay error
    });
    */
    // --- FIN: Ejemplo con fetch ---


    // --- INICIO: Usamos nuestra simulación ---
    fetchDataSimulator();
    // --- FIN: Usamos nuestra simulación ---

});