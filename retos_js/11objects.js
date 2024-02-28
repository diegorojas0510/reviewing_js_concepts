// Es como llevar un objeto fisico a los paradigmas de objetos a js
// Object in js
// los objetos se manejan con propiedades
// palabras claves y valores,

// Objetos
const miAuto = {
    // propiedades del objeto carro
    marca: "Mazda",
    modelo: "3",
    annio: 2023,
    puertas: 4,
    color: "Rojo",
    limpiaBrisas: 3,
    detalleDelAuto: function(){
        // this hace referencia al objeto global miAuto
        console.log(`Módelo: ${ this.modelo}, Año: ${ this.annio}`)
    }
};

// para acceder a las propiedades del objeto podemos hacerlo llamando al objeto seguido de punto . y luego su propiedad ejem:  miAuto.marca
console.log(miAuto.marca)
console.log(miAuto.annio)
console.log(miAuto.color)
console.log(miAuto.detalleDelAuto())
console.log(miAuto);


// TODO: Objetos de forma automatica
// función constructora, generar un template de un objeto con parametros

// parametros de la función: propiedades modelo, marca, annio, color
function auto(marca, modelo, annio, color, ){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.color = color;
}
// generamos una nueva instancia de nuestro objeto
var autoNuevo = new auto("Renault", "logan", "2023", "Negro")
var autoNuevoDos = new auto("Ford", "Fiesta", "2024", "Azul")
var autoNuevoTres = new auto("Toyota", "Corolla", "2018", "Verde")
console.log(autoNuevo)
console.log(autoNuevoDos)
console.log(autoNuevoTres)

/* Reto: crear un loop para crear de manera menos manual 30 instancias del objeto auto
 */
    var marcas = ["Abarth", "Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Cadillac","Caterham","Chevrolet","Citroen","Dacia","Ferrari","Fiat","Ford","Honda","Infiniti","Isuzu","Iveco","Jaguar"];
    var modelo = ["C-Max","Fiesta","Focus","Mondeo","Ka","S-MA","B-MAX","Grand C-Max", "Tourneo Custom", "Kuga", "Galaxy", "Grand Tourneo Connect", "Tourneo Connect", "EcoSport", "Tourneo Courier", "Mustang", "Transit Connect", "Edge", "Ka+"];
    var annio = ["1988", "1989", "1978", "1989", "1928", "1989", "1968", "1989", "1888", "1989", "1288", "1989", "1938", "1989", "1988", "1999", "1983", "1989", "1918"];
    var color = ["verde","morado","azul","Rojo","Violeta","Purpura","Rosado", "Negro","Amarillo", "Cafe","Cian","blanco"]
function auto2(marcas, modelo, annio, color, ){
    this.marca = marcas;
    this.modelo = modelo;
    this.annio = annio;
    this.color = color
    }

    for (var i = 0; marcas.length > i && modelo.length > i && annio.length > i && color.length > i; i++){
        var nuevoAuto = new auto2(marcas[i], modelo[i], annio[i], color[i])
        console.log(nuevoAuto)
}


// En este desafío vas a recibir un objeto car como parámetro de la función solution.
// Este objeto puede contener diferentes propiedades. Debes asegurarte
// de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene,
// devuelve el objeto original con la propiedad drivingLicense como true. Si no la tiene,
// devuelve el objeto original con la propiedad drivingLicense como false.

function solution(car){
  if (car.hasOwnProperty('licensePlate')){
      car.drivingLicense = true;
      return car;
  }else {
      car.drivingLicense = false;
      return car;
  }
}
// Prueba 1
console.log(solution({
    color: 'red',
    brand: 'Kia',
}));

console.log(solution({
    color: 'red',
    brand: 'Kia',
    licensePlate: "ABC123"

}));







