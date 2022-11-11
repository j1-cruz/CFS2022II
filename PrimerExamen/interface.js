var relojSumergible = /** @class */ (function () {
    function relojSumergible(tiempoMaxBajoElAgua) {
        this.tiempoMaxBajoElAgua = 1;
        this.tiempoMaxBajoElAgua = tiempoMaxBajoElAgua;
    }
    relojSumergible.prototype.estadoDelReloj = function () {
        if (this.tiempoMaxBajoElAgua > 1) {
            console.log('Me rompi');
        }
        else {
            console.log('Estoy sano');
        }
    };
    return relojSumergible;
}());
var Reloj = new relojSumergible(1);
var Reloj2 = new relojSumergible(2);
Reloj.estadoDelReloj();
Reloj2.estadoDelReloj();
