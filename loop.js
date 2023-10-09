var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
/* primer loop ciclo for:
 1. Se define una variable igual a cero
 2. variable menor a la longitud del array
 3. incremento de esa variable
 forma de iterar:
 i = 0
 estudiantes = 4
 0 < 4 true // imprime maria y se incrementa i en 1
 i ahora vale 1
 1 < 4 true // imprime sergio y se incrementa i en 1
 i ahora vale 2
 2 < 4 true // imprime rosa y se incrementa i en 1
 i ahora vale 3
 3 < 4 true // imprime daniel y se incrementa i en 1
 4 < 4 falso // se rompe el ciclo y hay termina
*/
for (var i = 0; i < estudiantes.length; i++){
    //console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]);
}

// Segundo loop for of
// variable en singular de nuestro array en plural mientras existan alementos en singular o sea estudiante el ciclo arranca y cuando no encuentre mñás termina
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

