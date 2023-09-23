/*
*  TODO La coerción significa cuando podemos cambiar un tipo de valor a otro tipo de valor
*   Ejemlo valor tipo numero y cambairlo a valor tipo string o viceversa
 */

// Coerciones implicitas es cuando cambia los valores de un tipo de valor a otro tipo de valor
// Ejemplo:
var a = 4 + "7";  // Nos devuelve un string 47 ya que js asume que es una concatenación por el signo +
console.log(a);
console.log(typeof a)

var b = 4 * "7"; // JS aquí si asume que nosotros vamos a hacer una multiplicación y nos arroja un 28
console.log(b);
console.log(typeof b)

// y coerciones explicitas es cuando nosotros obligamos al sistema a que es ese tipo de valor que necesitamos

var a = 20;
var b = a + "";
console.log(typeof b);

// con esta coerción le decimos al navegador y a JS que lo que queremos recibir es un string
var c = String(a);
console.log(c);
console.log(typeof c);

var d  = Number(c);
console.log(d);
console.log(typeof d);

