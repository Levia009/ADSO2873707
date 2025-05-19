let formulario = document.getElementById("myForm");

formulario.addEventListener("submit", sendPersonalData);

function sendPersonalData(event) {
    event.preventDefault();
    const url = 'test3.php';
    fetch(url, {
        method: 'POST', // Metodo de envio de datos
        body: new FormData(formulario) // En el body se envian los datos
    })
    .then(resp => {
        if (resp.ok) {
            //return resp.text();
            return resp.json();
        } else {
            throw new Error("Error en llamdo asincrono");
        }
    })
    .then(data => {
        document.getElementById("resultado").innerHTML = data.message;
        document.getElementById("resultado").style.display = "block";
    })
    .catch(error => document.getElementById("resultado").innerHTML = error)
}
