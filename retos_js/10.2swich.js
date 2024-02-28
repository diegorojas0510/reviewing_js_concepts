const number = prompt("Choose an option: 1,2,100");
switch (number){
    case 1:
        console.log("Soy uno");
        break;
    case 2:
        console.log("Soy un dos")
    break;
    case 100:
        console.log("Soy 100")
    break;
    default:
        console.log("No soy nada")
};










function game(player1, player2) {
    switch (player1) {
        case "rock":
            if (player2 === "rock") {
                console.log("It's a tie");
            } else if (player2 === "paper") {
                console.log(`Player 2 wins: ${player2}`);
            } else if (player2 === "scissors") {
                console.log(`Player 1 wins: ${player1}`);
            }
            break;
        case "paper":
            if (player2 === "rock") {
                console.log(`Player 1 wins: ${player1}`);
            } else if (player2 === "paper") {
                console.log("It's a tie");
            } else if (player2 === "scissors") {
                console.log(`Player 2 wins: ${player2}`);
            }
            break;
        case "scissors":
            if (player2 === "rock") {
                console.log(`Player 2 wins: ${player2}`);
            } else if (player2 === "paper") {
                console.log(`Player 1 wins: ${player1}`);
            } else if (player2 === "scissors") {
                console.log("It's a tie");
            }
            break;
        default:
            console.log("Invalid input");
    }
}

var option1 = ["rock", "paper", "scissors"];
var machineOption1 = option1[Math.floor(Math.random() * 3)];
var option2 = ["rock", "paper", "scissors"];
var machineOption2 = option2[Math.floor(Math.random() * 3)];

console.log(`Player 1: ${machineOption1}`);
console.log(`Player 2: ${machineOption2}`);

game(machineOption1, machineOption2);


function solution(article){
   if (article === "computadora"){
       return "Con mi computadora puedo programar usando JavaScript";
   }else if (article === "celular"){
       return "En mi celular puedo aprender usando la app de Platzi"
   }else if (article === "cable"){
       return "¡Hay un cable en mi bota!"
   }else {
       return "Artículo no encontrado"
   }

}
solution("gato");

function solution(article){
    const computadora = "computadora"
    switch (article){
        case "computadora":
            return "Con mi computadora puedo programar usando JavaScript";
            break
        case "celular":
            return "En mi celular puedo aprender usando la app de Platzi"
            break
        case "cable":
            return "¡Hay un cable en mi bota!"
            break
        case article:
            if (article != "computadora" || article != "computadora" || article != "cable" )
            return "Artículo no encontrado"
            break
    }
}





