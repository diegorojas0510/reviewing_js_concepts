var person = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

while(person.length > 0){
    var estudiante = person.shift();
    saludarEstudiantes(estudiante);
}



/*
Ejercicio:
En este desafío tu función solution recibirá 3 parámetros:

TODO 1.estudiantes: un array de strings con varios nombres de estudiantes.
todo 2.deathCount: un número entero.
TODO 3.nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:
Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

Ejemplo 1:
El array estudiantes contiene los elementos "Nico" y "Zulle". El número deathCount es igual a 0. Y el nuevo estudiante es "Santi".
Al deathCount ser igual a 0, "Nico" y "Zulle" se quedan. Y agregamos "Santi" al final.
// Input
solution(["Nico", "Zule"], 0, "Santi")
// Output
["Nico", "Zule", "Santi"]
Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount
y agregando el elemento nuevo al final.
💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.
Ejemplo 2:
El array estudiantes contiene los elementos "Juan". "Juanita" y "Daniela". El número deathCount es igual a 1. Y el nuevo estudiante es "Julian". Al deathCount ser igual a 1,
el último elemento del array de estudiantes ("Daniela") se debe ir. Y agregamos "Julian" al final.
// Input
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
// Output
["Juan", "Juanita", "Julian"]
Ejemplo 3:
El array estudiantes contiene los elementos "Nath". "Luisa" y "Noru". El número deathCount es igual a 2. Y el nuevo estudiante es "Cami". Al deathCount ser igual a 2,
los últimos 2 elementos del array de estudiantes ("Luisa" y "Noru") se deben ir. Y agregamos "Cami" al final.
// Input
solution(["Nath", "Luisa", "Noru"], 2, "Cami")
// Output
["Nath", "Cami"]
*
*/


function solution1(estudiantes = [], deathCount, nuevo) {
    console.log("Solución 1");
    if (deathCount === 0) {
        // Se utiliza el (spread operator). Este operador se utiliza para crear una copia superficial de un array o para combinar varios arrays en uno solo.
        // devuelve un nuevo array que contiene todos los estudiantes originales más el nuevo estudiante como resultado de la función.
        return [...estudiantes, nuevo];

    }

    if (deathCount >= estudiantes.length) {
        return [nuevo];
        estudiantes.pop(estudiantes.length - deathCount);
        estudiantes.push(nuevo);
    }
    return  estudiantes;
}

function solution2(estudiantes = [], deathCount, nuevo) {
    console.log("Solución 2");
    if (deathCount === 0)
        return [...estudiantes, nuevo]
    if (deathCount >= estudiantes.length)
        return [nuevo]
    return [...estudiantes.slice(0, estudiantes.length - deathCount), nuevo]
}

function solution3(estudiantes = [], deathCount, nuevo) {
    console.log("Solución 3");
    if (deathCount === 0) {
        // utilizamos el contact para unir dos o mas arrays
        return  estudiantes.concat(nuevo);
    } else if (deathCount >= estudiantes.length) {
        return [nuevo];
    } else {
        const estudiantesRestantes = estudiantes.slice(0, estudiantes.length - deathCount);
        return estudiantesRestantes.concat(nuevo);
    }
}


console.log(solution1(["Juan", "Juanita", "Julian"], 0, "camila"))
console.log(solution1(["Pepe", "carlos", "martha"], 1, "pedro"))
console.log(solution1(["maria", "Diego", "carla"], 2, "kevin"))

console.log(solution2(["Juan", "Juanita", "Julian"], 0, "camila"))
console.log(solution2(["Pepe", "carlos", "martha"], 1, "pedro"))
console.log(solution2(["maria", "Diego", "carla"], 2, "kevin"))

console.log(solution3(["Juan", "Juanita", "Julian"], 0, "camila"))
console.log(solution3(["Pepe", "carlos", "martha"], 1, "pedro"))
console.log(solution3(["maria", "Diego", "carla"], 2, "kevin"))

