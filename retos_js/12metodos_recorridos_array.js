var articulos = [{nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Celular", costo: 24000},
    {nombre: "Laptop", costo: 45000},
    {nombre: "Audifonos", costo: 4500500}
];

// método filter no modifica el array
var nombreArticulosFilter = articulos.filter(function (articulo){
    // me filtra los articulos menores o iguales a 24000 devolveria 3
    return articulo.costo <= 24000
});
console.log(nombreArticulosFilter);

// método map
var nombreArticulosMap = articulos.map(function (articulo) {
    return articulo.nombre;
})
console.log(nombreArticulosMap);


// método find
var nombreArticulosFind = articulos.find(function (articulo) {
    return articulo.nombre === "Tv"
});
console.log(nombreArticulosFind);


// método each devuelve los articulos indicados
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
})

// método some(); devuelve verdadero o falso
var articulosBaratosSome = articulos.some(function (articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratosSome);


// método .push() nos permite agreagar uno o más elementos al final de un array
let numArray = [1,2,3,4]
function newNum() {
    numArray.push(6,7);
    console.log(numArray);
}
console.log(newNum());


// con string

let txtArray = ["Juan", "pedro", "pepe"];

function addCharacters() {
    txtArray.push("Diego", "Kevin")
    console.log(txtArray)
}
console.log(addCharacters());

// .shift() sirve para eliminar el primer elemento del array

function deleteCharacters() {
    let shitfArray =  txtArray.shift();
    console.log(txtArray);
    // vemos cual se elimino
    console.log(shitfArray);
}
console.log(deleteCharacters());


// .pop sirve para eliminar el ultimo elemento de un array

function popCharacters() {
    let popArray =  txtArray.pop();
    console.log(txtArray);
    // vemos cual se elimino
    console.log(popArray);
}
console.log(popCharacters());
