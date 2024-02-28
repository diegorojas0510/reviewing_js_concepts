// palabras reservadas function y var

// Conjunto de sentencias para hacer un tarea o hacer ciertos pasos o validar cosas
// funciones declarativas

function miFuncion(){
    return 3;
}
// Como se hace el llamado a la función
miFuncion();

// como se imprime
console.log(miFuncion())

/*######################################################################################*/
// funciones de expresíon o funciones anonimas porque no se le pone nombre a la función
var pepito = function (a,b){
    return a + b;
}
// Se llama es por el nombre de la variable y con parentesis de la función se le deben pasar parametros ya que se declararon en la función
pepito(1,5)

console.log(pepito(1,5))

/* Diferencias entre ambas funcones
* Declarativas tienen nombre, Expresión no
* */