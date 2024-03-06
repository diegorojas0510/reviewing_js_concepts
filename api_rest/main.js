// pruebas de funcionamiento
console.log('Hello, word');

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
const API_URL_FAVOTITES = 'https://api.thecatapi.com/v1/favourites?api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
const API_URL_FAVOTITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=c08d415f-dea7-4a38-bb28-7b2188202e46`;
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
async function loadRandomCats() {
    try {
        const response = await fetch(API_URL_RANDOM);
        // await es para esperar que una operación asíncrona, como una solicitud de red o una lectura de archivo, se complete antes de continuar ejecutando el resto del código en la función.
        const data = await response.json();
        console.log('Cargar Michis');
        console.log(data);
        //const img = document.querySelector('img');

        if (response.status !== 200){
            spanError.innerHTML = "Hubo un error: " + response.status + error.message;
        }else {
            const img1 = document.getElementById('img1');
            const img2 = document.getElementById('img2');
            const btn1 = document.getElementById('btn1');
            const btn2 = document.getElementById('btn2');

            img1.src = data[0].url;
            img2.src = data[1].url;

            btn1.onclick = () => saveFavouriteCats(data[0].id)
            btn2.onclick = () => saveFavouriteCats(data[1].id)
        }

    } catch (error) {
        console.error('Error fetching Cat image:', error);
        spanError.innerHTML = "Error los gatos no se pueden cargar aleatoreamente." +error.message;
    }
}

async function loadFavouritesCats() {
    try {
        const response = await fetch(API_URL_FAVOTITES);
        // await es para esperar que una operación asíncrona, como una solicitud de red o una lectura de archivo, se complete antes de continuar ejecutando el resto del código en la función.
        const data = await response.json();
        console.log('Gatos Favoritos');
        console.log(data);

        if (response.status !== 200){
            spanError.innerHTML = "Hubo un error: " + response.status + error.message;
        }else {

            const section = document.getElementById('saveFavouriteCats')
            section.innerHTML = ``;

            const h2 = document.createElement('h2');
            const h2Text = document.createTextNode('Michis favoritos');
            h2.appendChild(h2Text);
            section.appendChild(h2);

            data.forEach(michi => {
                const article = document.createElement('article');
                const img = document.createElement('img');
                const btn = document.createElement('button');
                const btnText = document.createTextNode('Sacar al michi de favoritos')

                img.src = michi.image.url;
                img.width = 150;
                btn.appendChild(btnText);
                btn.onclick = () => deleteFavouriteCats(michi.id);
                article.appendChild(img);
                article.appendChild(btn);
                section.appendChild(article);
                //michi.image.url
            })
        }

    } catch (error) {
        console.error('Error :', error);
        spanError.innerHTML = "Hubo un error al cargar los perros." + error.message;
    }
}

async function saveFavouriteCats(id) {
    try {
        const response = await fetch(API_URL_FAVOTITES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image_id: id,
            }),
        });

        const data = await response.json();
        console.log('Guardar Michis Favoritos');
        console.log(response);

        if (response.status !== 200) {
            spanError.innerHTML = `Hubo un error al guardar los gatos en favoritos: ${response.status} ${data.message}`;
        }else {
            console.log('Michi guardado en favoritos')
            loadFavouritesCats();
        }
    } catch (error) {
        console.error('Error:', error);
        spanError.innerHTML = `Hubo un error al guardar los gatos en favoritos. ${error.message}`;
    }
}


async function deleteFavouriteCats(id) {
    try {
        const response = await fetch(API_URL_FAVOTITES_DELETE(id), {
            method: 'DELETE',
        });

         const data = await response.json();

        if (response.status !== 200) {
            spanError.innerHTML = `Hubo un error al eliminar los gatos en favoritos: ${response.status} ${data.message}`;
        }else {
            console.log('Michi Eliminado con exito!!')
            loadFavouritesCats();
        }
    } catch (error) {
        console.error('Error:', error);
        spanError.innerHTML = `Hubo un error al guardar los gatos en favoritos. ${error.message}`;
    }
}





// Asignar el evento click al botón para obtener una nueva imagen
const button = document.getElementById('reload');
button.addEventListener('click', loadRandomCats);

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', loadRandomCats);
document.addEventListener('DOMContentLoaded', loadFavouritesCats);



