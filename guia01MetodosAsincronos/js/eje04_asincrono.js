let btnEnviar = document.getElementById("btnEnviar");
let formulario = document.getElementById("myForm");
btnEnviar.addEventListener("click", ajax);

function ajax(event) {
    event.preventDefault();
    formDatos = new FormData(formulario);
    const xhr = new XMLHttpRequest();
    const url = "test2.php";
    xhr.addEventListener('load', getRespuesta);
    xhr.open('POST', url, true);
    xhr.send(formDatos);
}

function getRespuesta() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let html = this.responseText;
            document.getElementById("resultado").innerHTML = html;
            document.getElementById("resultado").style.display = "block";
        } else {
            console.error("Error en la peticion");
        }
    }
}

// window.onload = function() {
//     var div = document.getElementById("resultado");
//     if (div.innerText.trim() !== "") {  // Verificamos si el div tiene algún texto
//       div.style.display = "block";  // Si tiene texto, mostramos el div
//     }
//   };
