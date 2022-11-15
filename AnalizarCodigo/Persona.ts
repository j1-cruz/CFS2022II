
// Observaciones por linea y una observacion general al final del codigo.

//Se crea la clase padre en este caso, con los atributos nombre y edad ambos con el modificador de accseso protected
//Se crea el constructor con dos parametros para emparantar con los atributos de la clase, ambos con los mismos nombres para mejor un entendimiento
class Persona {
    protected nombre:string;
    protected edad:number;
    //Constructo con modificador de acceso public por defecto
    constructor(nombre:string, edad:number) {
    //Emparentamiento de los atributos con los parametros del constructor
      this.nombre = nombre; 
      this.edad = edad;
    }
   
    //Metodo para mostrar nombre y apellido por consola. Nombre poco dscriptivo. Modificador de acceso public por defecto
    imprimir() {
      /*  Codigo original
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      */
      //Correccion para una mejor vista en este caso 
      console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`);
    }    
  }
   //Clase Empleado que hereda de la clase Persona
  class Empleado extends Persona {
    private sueldo:number; //Atributo propio de la clase 
    constructor(nombre:string, edad:number, sueldo:number) {
      super(nombre, edad); //Con super llamamos los atributos de la calse padre 
      this.sueldo = sueldo; // Solo emparentamos el atributo porpio de la clase
    }

   //Metodo imprimir para mostrar el sueldo por consola. Nombre poco descritivo y repetido se presta a la confusion
    imprimir() {
      super.imprimir(); //Con super llamamos a el metodo heredado mal llamado imprimir debderia ser imprimirDatos o imprimirPersona
      //console.log(`Sueldo: ${this.sueldo}`); No se sabe de quien es el sueldo 
      console.log(`El sueldo de ${this.nombre} es de: ${this.sueldo}`); // Correccion
    }
   
    //Metodo con condicional para saber si debe o no pagar impuestos
    pagaImpuestos() {
      if (this.sueldo>5000)
        console.log(`${this.nombre} debe pagar impuestos`);
      else
        console.log(`${this.nombre} no debe pagar impuestos`);
    }
  }
   
  // Creamos una persona con sus respectivos atributos en este caso dos: nombre y edad
  const persona1=new Persona('Juan', 44);

  // LLamamos a el metodo imprimir para ver a la persona creada
  persona1.imprimir();

   
  // Creamos un empelado con sus respectivos atributos: nombre, edad "Atributos heredados de Persona" y sueldo atributo propio de la clase Empleado
  const empleado1=new Empleado('Ana', 22, 7000);


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