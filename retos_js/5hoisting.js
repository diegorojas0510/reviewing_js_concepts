/*
todo hoisting es cuando las variables y las funciones se declaran antes de que se procese cualquier linea de código,
 esto sucede unicamente cuando utilizas var y funtion.
 Esto no sucede con ecmascript 6 ya que de hay en adelante surgieron una nuevas variables const y let
*/

// Declarar la variable
// var miNombre;

// inicializar la variable
// miNombre = "Diego"

// Con hoisting lo que vamos hacer es llamar a la variable sin haber declarado.

console.log(miNombre)

 var miNombre = "Diego"

/*
Aquí lo que pasa es lo siguiente:
el navegador reconoce la variable miNombre y dice bueno aquí tengo esta variable debo hacer algo con ella la voy a guardar

    miNombre = undefined
 TODO las funciones se declaran priemro y despues las variables
 */

hey();

function hey(){
    console.log("Hola " + miNombre);
}

/*
TODO
Tener en cuenta para no cometer errores en JS priemro declarar al inicar el código mis funciones,
ejemplo si vamos en la línea 200 y necesitamos utilizar una función es mejor ya tenerla declarada en la parte superior
con eso evitamos error al llamr una variable que no este declarada. 
* */

