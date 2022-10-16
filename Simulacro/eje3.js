/*
Ejercicio 3:
Utilizar lo aprendido y crear una Clase, la cual tenga metedos y atributos, una instancia de dicha clase,
 y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede
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
var Termo = /** @class */ (function () {
    function Termo(marca, material, capacidad) {
        this.marca = marca;
        this.material = material;
        this.capacidad = capacidad;
    }
    Termo.prototype.imprimirDatos = function () {
        console.log("El termo es marca ".concat(this.marca, " su material es ").concat(this.material, " y tiene una capacidad de ").concat(this.capacidad, " Lts."));
    };
    return Termo;
}());
//probamos clase padre
var termoUno = new Termo("Stanley", "Acero", 2);
termoUno.imprimirDatos();
//Clase hija
var TermosConPico = /** @class */ (function (_super) {
    __extends(TermosConPico, _super);
    function TermosConPico(marca, material, capacidad, pico, name) {
        var _this = _super.call(this, marca, material, capacidad) || this;
        _this.pico = pico;
        _this.name = name;
        return _this;
    }
    TermosConPico.prototype.cebar = function () {
        console.log("El termo ".concat(this.name, " tiene pico cebador"));
    };
    return TermosConPico;
}(Termo));
var termoCebador = new TermosConPico("Lumilagro", "Plastico", 2, true, "TermoCebador");
termoCebador.cebar();
//Me quede sin imaginacion aca...
