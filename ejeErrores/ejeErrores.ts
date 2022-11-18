/*
CLASE- MANEJO DE ERRORES
Tomar dos ejercicios a elección que hayan hecho antes, y modificar la validación de los datos para hacerla 
empleando errores.
Al menos uno de ellos, debe ser un error personalizado.
(Escuela, Turnos)
Fecha de entrega 17/11
*/

import * as fs from 'fs';
import * as readFileSync from 'readline-sync';


class GestorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
    }
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
    public getArregloString(): string[] {
        return this.arregloString;
    }
}

class Auto{
    private patente: string;
    private marca: string;
    
    public constructor(patente: string, marca: string) {
        this.patente = patente;
        this.marca = marca;
    }
}


//Funcion para crear un objeto "nuevoRegistro" con los atributos patente y marca obtenidos del .txt
function crearRegistro(auto: string, arrayRegistro: Array<Auto>): void {

    let datosAuto: string[] = auto.split(','); 
    let patente: string = datosAuto[0];
    let marca: string = datosAuto[1];
   
    //creo un objeto "nuevoRegistro" con los atributos patente y marca obtenidos del .txt
    let nuevoRegistro = new Auto(patente,marca);
    //inserto el objeto de tipo Auto en el arreglo recibido
    arrayRegistro.push(nuevoRegistro);
}

/* Manejo de Errores*/ 
class ErrorValidacion extends Error {

    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorValidacion";
    }
}


function leerAutos(patente:string, marca:string) {  

    let nuevaPatente:string = patente
    let nuevaMarca:string = marca

    if(!nuevaPatente && !nuevaMarca){
        throw new ErrorValidacion("Ambos campos estan vacios"); 
    }
    else if (!nuevaPatente) {
        throw new ErrorValidacion("Campo patente VACIO"); 
    } else if (!nuevaMarca) {
        throw new ErrorValidacion("Campo marca VACIO");
    }

    return {nuevaMarca, nuevaPatente}

}

/*Fin manejo de errores*/ 


function agregarAuto(arrayRegistro: Array<Auto>): void {
    
    let patente: string = readFileSync.question("Ingrese la patente: ")
    let marca: string = readFileSync.question("Ingrese la marca: ");

/*Aplicamos la funcion con el try, catch*/ 
    try {
        let autos = leerAutos(patente, marca);
        console.log("No hubo errores:",autos);
        let nuevoAuto = new Auto(patente, marca);
        arrayRegistro.push(nuevoAuto);
    }
    catch(err){
       console.log("Encontramos un error:",err.message)
       agregarAuto(arrayRegistro)
    }
  
    
}


function modificarRegistro(arrayRegistro: Array<Auto>,  posicion: number): void {
    
    let patente: string = readFileSync.question("Ingrese la patente: ")
    let marca: string = readFileSync.question("Ingrese la marca: ");
    
    /*Aplicamos la funcion con el try, catch*/ 
    try {
        let autos = leerAutos(patente, marca);
        console.log("No hubo errores:",autos);
        let nuevoRegistro = new Auto(patente, marca);
        arrayRegistro[posicion] = nuevoRegistro;
    } catch(err){
        console.log("Encontramos un error:",err.message)
        modificarRegistro(arrayRegistro,1)
     }
  

    
}

function borrarRegistro(arrayRegistro: Array<Auto>,  posicion: number): void {

    delete arrayRegistro[posicion];
}



//Inicio programa
let datos = new GestorDeArchivos('registroAuto.txt'); // devuelve un arreglo de strings con "elementos" de Automotores.
let arrayRegistro: Array<Auto> = [];


for (let i: number = 0; i < datos.getArregloString().length; i++) {

    //Creo Registro uno por uno leyendo el txt, llamando a la funcion crearRegistro
    
    crearRegistro(datos.getArregloString()[i], arrayRegistro);
}




console.log("Array inicial",arrayRegistro);


console.log("Cargamos los datos para agregar un nuevo auto")
agregarAuto(arrayRegistro)
console.log("Datos con el nuevo auto", arrayRegistro)

console.log("Cargamos los datos para modificar un auto")
modificarRegistro(arrayRegistro,1);
console.log("Array modificado",arrayRegistro);

console.log("Cargamos los datos para eliminar un auto")
borrarRegistro(arrayRegistro,1);
console.log("Array con una eliminacion",arrayRegistro);
