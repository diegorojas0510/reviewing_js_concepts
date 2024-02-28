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
    console.log("Puedes Votar, sera tu primera votación");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else {
 console.log("Aún no puedes votar");
};


/* TODO operadores ternarios*/

// condition ? true : false;
var numero = 4;
var resultado = numero === 1 ? "Si soy un 1" : "No soy uno";
console.log(resultado);


// ######################################################### Rock, Paper, Scissors Game ##########################

const optionUser = prompt("Choose an option: rock, paper, or scissors").toLowerCase();
function game(){

    if (optionUser === "rock" || optionUser === "paper" || optionUser === "scissors"){
        const option = ["rock", "paper", "scissors"]
        const machineOption = option[Math.floor(Math.random() * 3)];
        console.log(`Your choice: ${optionUser}`);
        console.log(`Computer's choice: ${machineOption}`);
    if (optionUser === machineOption) {
        console.log("It's a tie");
    } else if (
        (optionUser === "rock" && machineOption === "scissors") ||
        (optionUser === "paper" && machineOption === "rock") ||
        (optionUser === "scissors" && machineOption === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose");
    }
    }else {
        console.log("Invalid option. Please choose rock, paper, or scissors.")
    }
}
game("rock");
game("paper");
game("scissors");



