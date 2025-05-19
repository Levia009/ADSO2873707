console.log("paso 1");

/* Funcion asincrona para realizaruna accion despues
de un tiempo determinado
recibe 2 parametros: la funcion y el tiempo en milisegundos */

setTimeout(function(){
    console.log("paso 2");
}, 1000);

setTimeout(() => {
    console.log("paso 3");
}, 700);