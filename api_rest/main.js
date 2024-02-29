// pruebas de funcionamiento
console.log('Hello, word');

const URL = "https://api.thedogapi.com/v1/images/search?limit=10";
// reconociendo mi url
/*
HTTPS = Protocolo de transferencia de datos de manera segura (Protocolo de Transferencia de Hipertexto Seguro):
Host y Endpoint api.thedogapi.com este es el servidor al que se le hace la solicitud
Ruta v1/images/search: este enpoint es la ruta que maneja la solicitud especifica
?: indica el inicio de de lo párametros de consulta en este caso limit=10
Limit=10: Este párametro limita el número de resultados que se devuelven en la respuesta de la api cantidad de perros 10
* */

// Función asíncrona que realiza la petición a la API eliminando los multiples usos de .then y siendo más legible la lectura de la función
// la función asincrona en js permite realizar tareas que pueden llevar tiempo sin bloquar la ejecución del resto del código
async function fetchDogImage() {
    try {
        const response = await fetch(URL);
        // await es para esperar que una operación asíncrona, como una solicitud de red o una lectura de archivo, se complete antes de continuar ejecutando el resto del código en la función.
        const data = await response.json();
        console.log(data);
        //const img = document.querySelector('img');
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');
        const img4 = document.getElementById('img4');
        const img5 = document.getElementById('img5');
        const img6 = document.getElementById('img6');
        const img7 = document.getElementById('img7');
        const img8 = document.getElementById('img8');
        const img9 = document.getElementById('img9');
        const img10 = document.getElementById('img10');

        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
        img4.src = data[3].url;
        img5.src = data[4].url;
        img6.src = data[5].url;
        img7.src = data[6].url;
        img8.src = data[7].url;
        img9.src = data[8].url;
        img10.src = data[9].url;


    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', fetchDogImage);

// Asignar el evento click al botón para obtener una nueva imagen
const button = document.querySelector('button');
button.addEventListener('click', fetchDogImage);

