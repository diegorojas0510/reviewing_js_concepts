// Operadores Asignación, Comparación y Aritméticos

//Operadores binarios:
3 + 2 //Suma
50 - 10 // Resta
10 * 20 //Multiplicación
20 / 2 //División

"Diego " + " Rojas" //concatenación de strings

//Operadores unitarios:
!false //negación de la negación = true

//Operadores de asignación:
var a = 1; //Asignamos un valor a la variable

//Operadores para comparar:
3 == "3"; //Compara los valores y devuelve "true" en este caso

3 === "3"; //Compara y valida los tipos y valores. Devuelve "falso" en este caso estrictamente iguales

5 < 3 //Compara y valida si el 5 es menor a 3
5 > 3 //Compara y valida si el 5 es mayor a 3
5 <= 6 //Compara y valida si el 5 es menor o igual al 6
5 >= 6 //Compara y valida si el 5 es mayor o igual al 6

//a && b //Valida si ambas variables son verdaderas para que se cumpla la condición
//a || b //Aquí se cumple la condición si alguna de las dos variables es verdadera

var edad = 40
edad++ //Incrementa el valor en 1

edad += 2 //Incrementa el valor por 2


// Todo En este desafío vas a recibir un parámetro secreto en la función solution. Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual.
function solution(secreto) {
    return !(secreto <= 5);
}

console.log(solution(1));
console.log(solution(7));
console.log(solution(10));


