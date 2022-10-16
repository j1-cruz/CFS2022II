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
/*
Ejercicio 1:
Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre
buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar
(composicion, herencia, polimorfismo, etc).
*/
/*Creo una clse animal abstracta para la creacion de animales, si bien en este ejmplo son dos seria una buena
practica tener esta clase padre*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this; //llamamos con super a los atributos heredados
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " el perro hace wuff wuff")); //Agregamos el name para saber de donde sale el ladrido
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " el gato hace meow meow"));
    };
    return Cat;
}(Animal));
//Aca se llamaban a los nombres de los objetos creados, no a el objeto en si, aplicamos esa correccion
var Cat1 = new Cat('Pocky');
Cat1.makeSound(); // -> meow meow
var Dog1 = new Dog('Pocky'); //Hacemos un cabio de nombre para hacer la modificacion mas notable
Dog1.makeSound(); // -> wuff wuff
