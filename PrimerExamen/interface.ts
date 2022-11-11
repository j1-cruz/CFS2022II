interface sumergibleInterface {
    tiempoMaxBajoElAgua: number;

    estadoDelReloj(): void;
  }

  class relojSumergible implements sumergibleInterface {

    constructor(tiempoMaxBajoElAgua: number) {
        this.tiempoMaxBajoElAgua = tiempoMaxBajoElAgua;
     }

    tiempoMaxBajoElAgua = 1;
    p
    estadoDelReloj() {
        if(this.tiempoMaxBajoElAgua > 1 ){
            console.log('Me rompi');
        } else {
            console.log('Estoy sano');
        }
     
    }
  }

  let Reloj = new relojSumergible(1);
  let Reloj2 = new relojSumergible(2);
  Reloj.estadoDelReloj()
  Reloj2.estadoDelReloj()


