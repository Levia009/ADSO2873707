const promesa = new Promise((resolve, reject) => {
    // Se genera numero aleatorio entre 0 y 10
    const num = Math.floor(Math.random()*10);

    setTimeout(() => {
        console.log(num);
        if (num > 5) {
            // Se resuelve la promesa
            resolve('Hoy salimos temprano');
        } else {
            // Se rescha la promesa
            reject(new Error('Hoy no salimos temprano'));
        }
    },1000);
});

promesa
.then(message => console.log(message))
.catch(error => console.error(error))
