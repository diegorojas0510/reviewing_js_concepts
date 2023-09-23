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


// ######################################################### Rock, Paper, Scissors Game ##########################
function jugar() {
    // Prompt the user to choose an option: rock, paper, or scissors, and convert their input to lowercase.
    const opcionUsuario = prompt("Choose an option: rock, paper, or scissors").toLowerCase();

    // Check if the user's choice is valid (rock, paper, or scissors).
    if (opcionUsuario === "rock" || opcionUsuario === "paper" || opcionUsuario === "scissors") {
        // Create an array of options for the computer to choose from.
        const opciones = ["rock", "paper", "scissors"];
        // Generate a random index to select an option for the computer.
        const opcionMaquina = opciones[Math.floor(Math.random() * 3)];

        // Display the user's choice and the computer's choice.
        console.log(`Your choice: ${opcionUsuario}`);
        console.log(`Computer's choice: ${opcionMaquina}`);

        // Determine the game result based on the choices.
        if (opcionUsuario === opcionMaquina) {
            console.log("It's a tie");
        } else if (
            (opcionUsuario === "rock" && opcionMaquina === "scissors") ||
            (opcionUsuario === "paper" && opcionMaquina === "rock") ||
            (opcionUsuario === "scissors" && opcionMaquina === "paper")
        ) {
            console.log("You win!");
        } else {
            console.log("You lose");
        }
    } else {
        // If the user's choice is not valid, display an error message.
        console.log("Invalid option. Please choose rock, paper, or scissors.");
    }
}

// Call the function to start the game.
jugar();

