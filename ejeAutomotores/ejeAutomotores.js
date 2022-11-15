"use strict";
/*
• Implementar la clase RegistroAutomotor: para poder
ver los autos registrados, para agregar un auto, para
modificar un auto y para “borrarlo” incorporando los
conceptos nuevos, y la clase LectorArchivos
*/
exports.__esModule = true;
var fs = require("fs");
var readFileSync = require("readline-sync");
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
var Auto = /** @class */ (function () {
    function Auto(patente, marca) {
        this.patente = patente;
        this.marca = marca;
    }
    return Auto;
}());
//Funcion para crear un objeto "nuevoRegistro" con los atributos patente y marca obtenidos del .txt
function crearRegistro(auto, arrayRegistro) {
    var datosAuto = auto.split(',');
    var patente = datosAuto[0];
    var marca = datosAuto[1];
    //creo un objeto "nuevoRegistro" con los atributos patente y marca obtenidos del .txt
    var nuevoRegistro = new Auto(patente, marca);
    //inserto el objeto de tipo Auto en el arreglo recibido
    arrayRegistro.push(nuevoRegistro);
}
function agregarAuto(arrayRegistro) {
    var patente = readFileSync.question("Ingrese la patente: ");
    var marca = readFileSync.question("Ingrese la marca: ");
    var nuevoAuto = new Auto(patente, marca);
    arrayRegistro.push(nuevoAuto);
}
function modificarRegistro(arrayRegistro, posicion) {
    var patente = readFileSync.question("Ingrese la patente: ");
    var marca = readFileSync.question("Ingrese la marca: ");
    var nuevoRegistro = new Auto(patente, marca);
    arrayRegistro[posicion] = nuevoRegistro;
}
function borrarRegistro(arrayRegistro, posicion) {
    delete arrayRegistro[posicion];
}
//Inicio programa
var datos = new GestorDeArchivos('registroAuto.txt'); // devuelve un arreglo de strings con "elementos" de Automotores.
var arrayRegistro = [];
for (var i = 0; i < datos.getArregloString().length; i++) {
    //Creo Registro uno por uno leyendo el txt, llamando a la funcion crearRegistro
    crearRegistro(datos.getArregloString()[i], arrayRegistro);
}
console.log("Array inicial", arrayRegistro);
console.log("Cargamos los datos para agregar un nuevo auto");
agregarAuto(arrayRegistro);
console.log("Datos con el nuevo auto", arrayRegistro);
console.log("Cargamos los datos para modificar un auto");
modificarRegistro(arrayRegistro, 1);
console.log("Array modificado", arrayRegistro);
console.log("Cargamos los datos para agregar eliminar un auto");
borrarRegistro(arrayRegistro, 1);
console.log("Array con una eliminacion", arrayRegistro);
