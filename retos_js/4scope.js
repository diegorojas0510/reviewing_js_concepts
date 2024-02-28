/* Que es el scope:
Es el alcance que tienen las variables;
en el scope global van a existir todas las validaciones que notoros pongamos(funciones, condiones, variable, etc)

// TODO  El scope global se da una vez nuestro archivo de JS se inicializa en el navegador
// TODO El scope local se da cuando nosotros creamos las funciones

_____________________________________________-
Cuando creamos un scope local podemos utilizar las variables y acceder a ellas
* pero desde el scope global no podemos acceder a las variables dentro del scope local
 */

// Ejemplo Scope Global:
 var nombre = "Diego"

// Scope local

function fun(){
     var apellido = "Rojas";
     return nombre + " " + apellido;
    console.log(apellido);
}
console.log(nombre)
// Esto genera un error al llamar una variable local en un entorno global ya que no existe apellido afuera de la función
// console.log(apellido)
// Forma de llamar a la función local
console.log(fun())
// Forma de llamarla en la consola del navegador
fun()

//*********************************************************************************
// TODO Ejemplo Hormigas y Humanos
var humanos  = "Humanos no pueden ver la comida de las hormigas, o muchos no ver las hormigas ";
function hormiga(){
     var comida = "Mientras las hormigas pueden ver a los humanos y comer su comida";
     return humanos + " " + comida;
}
console.log(hormiga());