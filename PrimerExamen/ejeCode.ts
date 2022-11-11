/*
Ejercicios de codeo:

Crear una clase -con al menos 2 métodos y 2 atributos-      /si
Crear un objeto                                             /si
Crear una interfaz - implementarla en una clase-            /si
Crear una clase Abstracta                                   /si
Crear una relación de herencia                              /si
Crear un ejemplo de composición
*/

abstract class Computadora { 
    protected marca:string;
    protected tipo:string;
    
    constructor(marca: string, tipo:string) {
        this.marca = marca;
        this.tipo = tipo;

      }

    abstract Resolucion():void;
}

class Laptop extends Computadora {
 constructor(marca: string, tipo:string) {
    super(marca,tipo) //llamamos con super a los atributos heredados
 }
 public info(): void {
   console.log (`Esta computadora es de marca ${this.marca} y es de tipo ${this.tipo}`); //Agregamos el name para saber de donde sale el ladrido
 }
 Resolucion() {
     console.log("La resolucion maxima es 4K")
 }

}

class Escritorio extends Computadora{
 constructor(marca: string, tipo:string) {
    super(marca,tipo)
 }
  public info(): void {
    console.log (`Esta computadora es de marca ${this.marca} y es de tipo ${this.tipo}`);
 }

 Resolucion(): void {
    console.log("La resolucion maxima es HD")
}

}

let Computadora1 = new Laptop('Lenovo', "Laptop");
Computadora1.info();
Computadora1.Resolucion()

let Computadora2 = new Escritorio('HP', "Escritorio"); //Hacemos un cabio de nombre para hacer la modificacion mas notable
Computadora2.info(); 
Computadora2.Resolucion()