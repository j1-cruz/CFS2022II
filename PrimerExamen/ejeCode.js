/*
Ejercicios de codeo:

Crear una clase -con al menos 2 métodos y 2 atributos-
Crear un objeto
Crear una interfaz - implementarla en una clase-
Crear una clase Abstracta
Crear una relación de herencia
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
var Computadora = /** @class */ (function () {
    function Computadora(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }
    return Computadora;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(marca, tipo) {
        return _super.call(this, marca, tipo) || this; //llamamos con super a los atributos heredados
    }
    Laptop.prototype.info = function () {
        console.log("Esta computadora es de marca ".concat(this.marca, " y es de tipo ").concat(this.tipo)); //Agregamos el name para saber de donde sale el ladrido
    };
    Laptop.prototype.Resolucion = function () {
        console.log("La resolucion maxima es 4K");
    };
    return Laptop;
}(Computadora));
var Escritorio = /** @class */ (function (_super) {
    __extends(Escritorio, _super);
    function Escritorio(marca, tipo) {
        return _super.call(this, marca, tipo) || this;
    }
    Escritorio.prototype.info = function () {
        console.log("Esta computadora es de marca ".concat(this.marca, " y es de tipo ").concat(this.tipo));
    };
    Escritorio.prototype.Resolucion = function () {
        console.log("La resolucion maxima es HD");
    };
    return Escritorio;
}(Computadora));
var Computadora1 = new Laptop('Lenovo', "Laptop");
Computadora1.info();
Computadora1.Resolucion();
var Computadora2 = new Escritorio('HP', "Escritorio"); //Hacemos un cabio de nombre para hacer la modificacion mas notable
Computadora2.info();
Computadora2.Resolucion();
