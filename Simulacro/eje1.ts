/*
Ejercicio 1:
Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre 
buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar 
(composicion, herencia, polimorfismo, etc).
*/
/*Creo una clse animal abstracta para la creacion de animales, si bien en este ejmplo son dos seria una buena 
practica tener esta clase padre*/
class Animal { 
    protected name:string;
    constructor(name: string) {
        this.name = name;
      }
}

class Dog extends Animal{
 constructor(name: string) {
    super(name) //llamamos con super a los atributos heredados
 }
 public makeSound(): void {
   console.log (`${this.name} el perro hace wuff wuff`); //Agregamos el name para saber de donde sale el ladrido
 }
}
class Cat extends Animal{
 constructor(name: string) {
  super(name)
 }
  public makeSound(): void {
    console.log (`${this.name} el gato hace meow meow`);
 }
}

//Aca se llamaban a los nombres de los objetos creados, no a el objeto en si, aplicamos esa correccion
let Cat1 = new Cat('Pocky');
Cat1.makeSound(); // -> meow meow

let Dog1 = new Dog('Pocky'); //Hacemos un cabio de nombre para hacer la modificacion mas notable
Dog1.makeSound(); // -> wuff wuff
