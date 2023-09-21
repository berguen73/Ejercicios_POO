var Serie = /** @class */ (function () {
    function Serie(titulo, añoEstreno, episodiosTotales, temporadas, finalizada) {
        this.titulo = titulo;
        this.añoEstreno = añoEstreno;
        this.episodiosTotales = episodiosTotales;
        this.temporadas = temporadas;
        this.episodiosVistos = 0;
        this.finalizada = finalizada;
    }
    Serie.prototype.verEpisodio = function () {
        if (this.episodiosVistos < this.episodiosTotales) {
            this.episodiosVistos++;
            console.log("Miraste un nuevo episodio de ".concat(this.titulo));
        }
        else {
            console.log("Ya viste todos los episodios de ".concat(this.titulo));
        }
    };
    Serie.prototype.episodiosPorVer = function () {
        return this.episodiosTotales - this.episodiosVistos;
    };
    Serie.prototype.serieVista = function () {
        return this.episodiosVistos === this.episodiosTotales;
    };
    Serie.prototype.toString = function () {
        return "".concat(this.titulo, " (").concat(this.añoEstreno, "), Temporadas: ").concat(this.temporadas, ", Episodios vistos: ").concat(this.episodiosVistos, "/").concat(this.episodiosTotales, ", ").concat(this.finalizada ? 'Finalizada' : 'En curso');
    };
    return Serie;
}());
// Ejemplo de uso:
var miSerie = new Serie("Your Honor", 2020, 20, 2, false);
console.log(miSerie.toString());
miSerie.verEpisodio();
console.log("Episodios por mirar: ".concat(miSerie.episodiosPorVer()));
console.log("\u00BFViste toda la serie? ".concat(miSerie.serieVista()));
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
console.log("Episodios por mirar: ".concat(miSerie.episodiosPorVer()));
console.log("\u00BFViste toda la serie? ".concat(miSerie.serieVista()));
console.log(miSerie.toString());
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
console.log("Episodios por mirar: ".concat(miSerie.episodiosPorVer()));
console.log("\u00BFViste toda la serie? ".concat(miSerie.serieVista()));
console.log(miSerie.toString());
miSerie.verEpisodio();
miSerie.verEpisodio();
console.log("Episodios por mirar: ".concat(miSerie.episodiosPorVer()));
console.log("\u00BFViste toda la serie? ".concat(miSerie.serieVista()));
console.log(miSerie.toString());
