// pruebas de funcionamiento
console.log('Hello, word');

const API_URL_RAMDOM = "https://api.thedogapi.com/v1/images/search?limit=2&";
const API_URL_FAVOTITES = "https://api.thedogapi.com/v1/images/search?favourites?limit=2&"
const API_KEY = "api_key=live_TQbkEDPisyPb0Kz6NGkKcKJApq4ScCC7Q5E9mA6jQII4C6hCaQnzhS3wNXhKctfL"
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

const statusCodes = {
    200: "OK",
    400: "Bad Request",
    401: "Unauthorized",
    404: "Not Found",
    500: "Internal Server Error"
};
async function loadRandomDogs() {
    try {
        const response = await fetch(`${API_URL_RAMDOM}${API_KEY}`);
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
            img1.src = data[0].url;
            img2.src = data[1].url;
            img3.src = data[2].url;
        }

    } catch (error) {
        console.error('Error fetching Dog image:', error);
        spanError.innerHTML = "Error los perros no se pueden cargar aleatoreamente." +error.message;
    }
}
loadRandomDogs();


async function loadFavouritesDogs() {
    try {
        const response = await fetch(`${API_URL_FAVOTITES}${API_KEY}`);
        // await es para esperar que una operación asíncrona, como una solicitud de red o una lectura de archivo, se complete antes de continuar ejecutando el resto del código en la función.
        const data = await response.json();
        console.log('Perros Favoritos');
        console.log(data);

        if (response.status !== 200){
            spanError.innerHTML = "Hubo un error: " + response.status + error.message;
        }

    } catch (error) {
        console.error('Error :', error);
        spanError.innerHTML = "Hubo un error al cargar los perros." + error.message;
    }
}
loadFavouritesDogs();

async function saveFavouriteDogs(imageId) {
    try {
        const response = await fetch(API_URL_FAVOTITES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image_id: imageId,
            }),
        });

        const data = await response.json();
        console.log('Guardar Perros Favoritos');
        console.log(data);
        console.log(response);

        if (response.status !== 200) {
            spanError.innerHTML = `Hubo un error al guardar en favoritos: ${response.status} ${data.message}`;
        } else {
            // Mostrar mensaje de éxito
        }
    } catch (error) {
        console.error('Error:', error);
        spanError.innerHTML = `Hubo un error al guardar los perros en favoritos. ${error.message}`;
    }
}



// Asignar el evento click al botón para obtener una nueva imagen
const button = document.getElementById('reload');
button.addEventListener('click', loadRandomDogs);

// Ejecutar la función al cargar la página
//document.addEventListener('DOMContentLoaded', loadRandomDogs);
//document.addEventListener('DOMContentLoaded', loadFavouritesDogs);



