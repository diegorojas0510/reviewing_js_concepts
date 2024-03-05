// pruebas de funcionamiento
console.log('Hello, word');

const API_URL_RAMDOM = "https://api.thedogapi.com/v1/images/search?limit=2&api_key=";
const API_URL_FAVOTITES = "https://api.thedogapi.com/v1/images/search?favourites?limit=2&api_key="
// reconociendo mi url
/*
HTTPS = Protocolo de transferencia de datos de manera segura (Protocolo de Transferencia de Hipertexto Seguro):
Host y Endpoint api.thedogapi.com este es el servidor al que se le hace la solicitud
Ruta v1/images/search: este enpoint es la ruta que maneja la solicitud especifica
?: indica el inicio de de lo párametros de consulta en este caso limit=10
Limit=10: Este párametro limita el número de resultados que se devuelven en la respuesta de la api cantidad de perros 10
&: Sirve parta concatenar
api_key: le pasamos la key para autenticarnos en nuestra aplicación con esto la api sabra quienes somos y si tenemos limitantes nos empesara a contar las peticiones
en este caso son 10.mil
* */
// Función asíncrona que realiza la petición a la API eliminando los multiples usos de .then y siendo más legible la lectura de la función
// la función asincrona en js permite realizar tareas que pueden llevar tiempo sin bloquar la ejecución del resto del código

const spanError = document.getElementById('error');

async function loadRandomDogs() {
    try {
        const response = await fetch(API_URL_RAMDOM);
        // await es para esperar que una operación asíncrona, como una solicitud de red o una lectura de archivo, se complete antes de continuar ejecutando el resto del código en la función.
        const data = await response.json();
        console.log('Cargar perros');
        console.log(data);
        //const img = document.querySelector('img');

        if (response.status !== 200){
            spanError.innerHTML = "Hubo un error: " + response.status + error.message;
        }else {
            const img1 = document.getElementById('img1');
            const img2 = document.getElementById('img2');
            const img3 = document.getElementById('img3');
            const img4 = document.getElementById('img4');
            const img5 = document.getElementById('img5');

            img1.src = data[0].url;
            img2.src = data[1].url;
            img3.src = data[2].url;
            img4.src = data[3].url;
            img5.src = data[5].url;
        }

    } catch (error) {
        console.error('Error fetching Dog image:', error);
    }
}

async function favoritesRandomDogs() {
    try {
        const response = await fetch(API_URL_FAVOTITES);
        // await es para esperar que una operación asíncrona, como una solicitud de red o una lectura de archivo, se complete antes de continuar ejecutando el resto del código en la función.
        const data = await response.json();
        console.log('Perros Favoritos');
        console.log(data);

        if (response.status !== 200){
            spanError.innerHTML = "Hubo un error: " + response.status + error.message;
        }

    } catch (error) {
        console.error('Error :', error);
    }
}

// Asignar el evento click al botón para obtener una nueva imagen
const button = document.getElementById('reload');
button.addEventListener('click', loadRandomDogs);

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', loadRandomDogs);
document.addEventListener('DOMContentLoaded', favoritesRandomDogs);



