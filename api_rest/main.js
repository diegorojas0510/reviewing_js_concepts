// pruebas de funcionamiento
console.log('Hello, word');

const URL = "https://api.thecatapi.com/v1/images/search";

// Función asíncrona que realiza la petición a la API eliminando los multiples usos de .then y siendo más legible la lectura de la función
// la función asincrona en js permite realizar tareas que pueden llevar tiempo sin bloquar la ejecución del resto del código
async function fetchCatImage() {
    try {
        const response = await fetch(URL);
        // await es para esperar que una operación asíncrona, como una solicitud de red o una lectura de archivo, se complete antes de continuar ejecutando el resto del código en la función.
        const data = await response.json();
        const img = document.querySelector('img');
        img.src = data[0].url;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', fetchCatImage);

// Asignar el evento click al botón para obtener una nueva imagen
const button = document.querySelector('button');
button.addEventListener('click', fetchCatImage);

