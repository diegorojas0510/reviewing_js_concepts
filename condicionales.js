// reglas que se aplican si algo es verdadero o algo es falso
// if valida que odo lo que vaya dentro del parentesis sea verdadero
if (true){
    console.log("Hola");
}else if ("Pepe") {
    console.log("Juan")
}else {
    console.log("Soy Falso");
};


var edad = 18;

if (edad === 18){
    console.log("Puedes Votar, sera tu primera votación")
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else {
 console.log("Aún no puedes votar")
};


/* TODO operadores ternarios*/

// condition ? true : false;
var numero = 4;
var resultado = numero === 1 ? "Si soy un 1" : "No soy uno";
console.log(resultado);


// ######################################################### Juego de piedra papel o tijera ##########################
function jugar() {
    const opcionUsuario = prompt("Elige una opción: piedra, papel o tijeras").toLowerCase();

    if (opcionUsuario === "piedra" || opcionUsuario === "papel" || opcionUsuario === "tijeras") {
        const opciones = ["piedra", "papel", "tijeras"];
        const opcionMaquina = opciones[Math.floor(Math.random() * 3)];

        console.log(`Tu elección: ${opcionUsuario}`);
        console.log(`Elección de la máquina: ${opcionMaquina}`);

        if (opcionUsuario === opcionMaquina) {
            console.log("Empate");
        } else if (
            (opcionUsuario === "piedra" && opcionMaquina === "tijeras") ||
            (opcionUsuario === "papel" && opcionMaquina === "piedra") ||
            (opcionUsuario === "tijeras" && opcionMaquina === "papel")
        ) {
            console.log("¡Ganaste!");
        } else {
            console.log("Perdiste");
        }
    } else {
        console.log("Opción inválida. Por favor, elige entre piedra, papel o tijeras.");
    }
}

// Llama a la función para comenzar el juego
jugar();

