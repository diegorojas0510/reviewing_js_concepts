var frutas = ["manzana", "pera", "fresa", "cereza"];
console.log(frutas);
console.log(frutas[1]);
console.log(frutas.length);

// Añadir en más elementos metodo push:
// Añade un nuevo elemento
var masFrutas = frutas.push("naranjas")
console.log(frutas);


//Eliminar elementos método pop
// Elimina el ultimo elemento de la lista
var menosFrutas = frutas.pop("naranjas");
console.log(frutas);

// Añade un nuevo elemento al inicio de la lista
var nuevaLongitud = frutas.unshift("Uvas");
console.log(frutas);

// Elimina el primer elemento del array
var deleteFruit = frutas.shift("Uvas");
console.log(frutas);

var posicion = frutas.indexOf("fresa");
console.log(posicion);
console.log(frutas);



// En este desafío vas a recibir un parámetro arraySecreto en la función solution.
// Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.
function solution(arraySecreto) {
    // Verificar si el array no está vacío
    if (arraySecreto.length > 0) {
        // Verificar si el primer elemento es de tipo "string"
        if (typeof arraySecreto[0] === "string") {
            return true;
        }
    }
    // Si no se cumple ninguna de las condiciones anteriores, retornar false
    return false;
}
console.log(solution(["Huevo", "Gallina", "Vaca"]));
console.log(solution([1, "Gallina", "Vaca"]));