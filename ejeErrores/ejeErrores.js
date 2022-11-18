"use strict";
/*
CLASE- MANEJO DE ERRORES
Tomar dos ejercicios a elección que hayan hecho antes, y modificar la validación de los datos para hacerla
empleando errores.
Al menos uno de ellos, debe ser un error personalizado.
(Escuela, Turnos)
Fecha de entrega 17/11
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* Manejo de Errores*/
var ErrorValidacion = /** @class */ (function (_super) {
    __extends(ErrorValidacion, _super);
    function ErrorValidacion(mensaje) {
        var _this = _super.call(this, mensaje) || this;
        _this.name = "ErrorValidacion";
        return _this;
    }
    return ErrorValidacion;
}(Error));
function leerAutos(patente, marca) {
    var nuevaPatente = patente;
    var nuevaMarca = marca;
    if (!nuevaPatente && !nuevaMarca) {
        throw new ErrorValidacion("Ambos campos estan vacios");
    }
    else if (!nuevaPatente) {
        throw new ErrorValidacion("Campo patente VACIO");
    }
    else if (!nuevaMarca) {
        throw new ErrorValidacion("Campo marca VACIO");
    }
    return { nuevaMarca: nuevaMarca, nuevaPatente: nuevaPatente };
}
/*Fin manejo de errores*/
function agregarAuto(arrayRegistro) {
    var patente = readFileSync.question("Ingrese la patente: ");
    var marca = readFileSync.question("Ingrese la marca: ");
    /*Aplicamos la funcion con el try, catch*/
    try {
        var autos = leerAutos(patente, marca);
        console.log("No hubo errores:", autos);
        var nuevoAuto = new Auto(patente, marca);
        arrayRegistro.push(nuevoAuto);
    }
    catch (err) {
        console.log("Encontramos un error:", err.message);
        agregarAuto(arrayRegistro);
    }
}
function modificarRegistro(arrayRegistro, posicion) {
    var patente = readFileSync.question("Ingrese la patente: ");
    var marca = readFileSync.question("Ingrese la marca: ");
    /*Aplicamos la funcion con el try, catch*/
    try {
        var autos = leerAutos(patente, marca);
        console.log("No hubo errores:", autos);
        var nuevoRegistro = new Auto(patente, marca);
        arrayRegistro[posicion] = nuevoRegistro;
    }
    catch (err) {
        console.log("Encontramos un error:", err.message);
        modificarRegistro(arrayRegistro, 1);
    }
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
console.log("Cargamos los datos para eliminar un auto");
borrarRegistro(arrayRegistro, 1);
console.log("Array con una eliminacion", arrayRegistro);
