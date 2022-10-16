/*
Ejercicio 3:
Utilizar lo aprendido y crear una Clase, la cual tenga metedos y atributos, una instancia de dicha clase,
 y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede
 */

 class Termo {
   protected marca: string;
   protected material: string;
   protected capacidad:number;

   constructor( marca: string, material: string, capacidad:number){
    this.marca = marca;
    this.material = material;
    this.capacidad = capacidad;

   }

   imprimirDatos(){
    console.log(`El termo es marca ${this.marca} su material es ${this.material} y tiene una capacidad de ${this.capacidad} Lts.`)
   }
 }

 //probamos clase padre
const termoUno = new Termo("Stanley","Acero",2)
termoUno.imprimirDatos()

//Clase hija

class TermosConPico extends Termo{
    protected pico: true;
    protected name: string;

    constructor(marca: string, material: string, capacidad:number, pico:true, name:string){
        super(marca,material,capacidad);
        this.pico = pico;
        this.name = name;
    }

    cebar(){
        console.log(`El termo ${this.name} tiene pico cebador`)
    }
}

const termoCebador = new TermosConPico("Lumilagro", "Plastico", 2, true,"TermoCebador")
termoCebador.cebar()

//Me quede sin imaginacion aca...