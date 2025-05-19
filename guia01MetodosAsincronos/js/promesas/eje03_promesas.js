const url = 'https://restcountries.com/v3.1';
const slCountries = document.getElementById("slCountries");
const rsCountries = document.getElementById("rsCountries");

function setCountries() {
    fetch(`${url}/all`)
        .then(resp => resp.json()) // Se convierte la respuesta en json
        .then(data => {
            console.log(data);
            data.forEach(element => {
                slCountries.innerHTML += `<option value="${element.cca3}">${element.name.common}</option>`
                
                });

            //new DataTable('#countriesData');
        })
}

setCountries();

slCountries.addEventListener('change', infoCountry);
function infoCountry() {
    let codCountry = this.value;
    fetch(`${url}/alpha/${codCountry}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
            rsCountries.innerHTML += `<tr>
                    <td>${element.name.common}</td>
                    <td>${element.population}</td>
                    <td>${element.region}</td>
                    <td>
                    ${
                    // 1. Verificar si element.currencies existe y no está vacío
                    element.currencies && Object.keys(element.currencies).length > 0
                    // 2. Si existe: Obtener los valores (objetos de moneda)
                    ? Object.values(element.currencies)
                    // 3. Mapear cada objeto 'c' a una cadena formateada "Nombre (Símbolo)"
                    .map(c => `${c.name} (${c.symbol ?? ''})`) // Usa ?? '' por si falta el símbolo
                    // 4. Unir las cadenas resultantes con coma y espacio
                    .join(', ')
                    // 5. Si no existe o está vacío, mostrar 'N/A'
                    : 'N/A'
                    }
                    </td>
                    <td>
                    ${
                    // 1. Verifica si element.languages existe y tiene claves
                    element.languages && Object.keys(element.languages).length > 0
                    // 2. Si existe, obtén los valores (nombres) y únelos
                    ? Object.values(element.languages).join(', ')
                    // 3. Si no existe o está vacío, muestra 'N/A'
                    : 'N/A'
                    }
                    </td>
                    <td><img src="${element.flags.png}" width="50"></td>
                    <td><a href="${element.maps.googleMaps}">GoogleMaps</a></td>
                    </tr>
                `
                });
        })
}



// function getCountries() {
//     fetch(`${url}/alpha/${codCountry}`)
//         .then(resp => resp.json()) // Se convierte la respuesta en json
//         .then(data => {
//             console.log(data);
//             data.forEach(element => {
//                 rsCountries.innerHTML += `
//             <td>${element.name.common}</td>
//             <td>${element.population}</td>
//             <td>${element.region}</td>
//             <td></td>
//             <td>${element.languages}</td>
//             <td>${element.flags.png}</td>
//             <td>${element.maps.googleMaps}</td>
//             `
//             });
            
//         })
// }

//getCountries();



