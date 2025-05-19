function ajax() {
    //FormData: representa un formulario con datos
    let data = new FormData();
    data.append("num1", 3);
    data.append("num2", 7);

    const xhr = new XMLHttpRequest();
    const url = "test.php";

    xhr.onreadystatechange = function () {
        if (this.readyState == 4) { //la peticion a sido completada
            if (this.status == 200) {
                console.log(this.responseText);
            } else {
                console.error("Error en la peticion");
            }
        }
    };
    xhr.open('POST', url);
    xhr.send(data);
}

ajax();
