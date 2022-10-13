// Observaciones por linea y una observacion general al final del codigo.
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
//Se crea la clase padre en este caso, con los atributos nombre y edad ambos con el modificador de accseso protected
//Se crea el constructor con dos parametros para emparantar con los atributos de la clase, ambos con los mismos nombres para mejor un entendimiento
var Persona = /** @class */ (function () {
    //Constructo con modificador de acceso public por defecto
    function Persona(nombre, edad) {
        //Emparentamiento de los atributos con los parametros del constructor
        this.nombre = nombre;
        this.edad = edad;
    }
    //Metodo para mostrar nombre y apellido por consola. Nombre poco dscriptivo. Modificador de acceso public por defecto
    Persona.prototype.imprimir = function () {
        /*  Codigo original
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        */
        //Correccion para una mejor vista en este caso 
        console.log("Nombre: ".concat(this.nombre, " Edad: ").concat(this.edad));
    };
    return Persona;
}());
//Clase Empleado que hereda de la clase Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, sueldo) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.sueldo = sueldo; // Solo emparentamos el atributo porpio de la clase
        return _this;
    }
    //Metodo imprimir para mostrar el sueldo por consola. Nombre poco descritivo y repetido se presta a la confusion
    Empleado.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this); //Con super llamamos a el metodo heredado mal llamado imprimir debderia ser imprimirDatos o imprimirPersona
        //console.log(`Sueldo: ${this.sueldo}`); No se sabe de quien es el sueldo 
        console.log("El sueldo de ".concat(this.nombre, " es de: ").concat(this.sueldo)); // Correccion
    };
    //Metodo con condicional para saber si debe o no pagar impuestos
    Empleado.prototype.pagaImpuestos = function () {
        if (this.sueldo > 5000)
            console.log("".concat(this.nombre, " debe pagar impuestos"));
        else
            console.log("".concat(this.nombre, " no debe pagar impuestos"));
    };
    return Empleado;
}(Persona));
// Creamos una persona con sus respectivos atributos en este caso dos: nombre y edad
var persona1 = new Persona('Juan', 44);
// LLamamos a el metodo imprimir para ver a la persona creada
persona1.imprimir();
// Creamos un empelado con sus respectivos atributos: nombre, edad "Atributos heredados de Persona" y sueldo atributo propio de la clase Empleado
var empleado1 = new Empleado('Ana', 22, 7000);
/*LLamamos a el metodo imprimir de la calse Empleado que a su ves llama a el metodo imprimir de la
clase padre Persona. Entonces vamos a ver en un principio nombre y edad de la persona que es lo que hace
el metodo imprimir de la clase padre Persona y luego el metodo imprimir propio de la clase Empleado que
muetra el sueldo de la persona.
*/
empleado1.imprimir();
// LLamamos a el metodo pagaImpuestos para saber si debe o no pagar impuestos
empleado1.pagaImpuestos();
/*
Observaciones finales:
Los metodos imprimir se prestan a confuncion
En el caso del metodo imprimir de la clase persona yo lo llamaria imprimirDatos o imprimirDatosPersona para que sea mas descriptivo.
Y en el metodo imprimir de la clase empleado imprimirSueldo creo que estataria bien.
Todos los metodos son public por defecto ya que a ninguno se especifica el tipo de modificador de acceso.
*/ 
