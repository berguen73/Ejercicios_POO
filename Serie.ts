class Serie {
    private titulo: string;
    private añoEstreno: number;
    private episodiosTotales: number;
    private temporadas: number;
    private episodiosVistos: number;
    private finalizada: boolean;

    constructor(titulo: string, añoEstreno: number, episodiosTotales: number, temporadas: number, finalizada: boolean) {
        this.titulo = titulo;
        this.añoEstreno = añoEstreno;
        this.episodiosTotales = episodiosTotales;
        this.temporadas = temporadas;
        this.episodiosVistos = 0;
        this.finalizada = finalizada;
    }

    verEpisodio() {
        if (this.episodiosVistos < this.episodiosTotales) {
            this.episodiosVistos++;
            console.log(`Miraste un nuevo episodio de ${this.titulo}`);
        } else {
            console.log(`Ya viste todos los episodios de ${this.titulo}`);
        }
    }

    episodiosPorVer() {
        return this.episodiosTotales - this.episodiosVistos;
    }

    serieVista() {
        return this.episodiosVistos === this.episodiosTotales;
    }

    toString() {
        return `${this.titulo} (${this.añoEstreno}), Temporadas: ${this.temporadas}, Episodios vistos: ${this.episodiosVistos}/${this.episodiosTotales}, ${this.finalizada ? 'Finalizada' : 'En curso'}`;
    }
}

// Vamos a ver unos caítulos:
const miSerie = new Serie("Your Honor", 2020, 20, 2, false);

console.log(miSerie.toString());
miSerie.verEpisodio();
console.log(`Episodios por mirar: ${miSerie.episodiosPorVer()}`);
console.log(`¿Viste toda la serie? ${miSerie.serieVista()}`);
miSerie.verEpisodio();
miSerie.verEpisodio();
miSerie.verEpisodio();
console.log(`Episodios por mirar: ${miSerie.episodiosPorVer()}`);
console.log(`¿Viste toda la serie? ${miSerie.serieVista()}`);

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

console.log(`Episodios por mirar: ${miSerie.episodiosPorVer()}`);
console.log(`¿Viste toda la serie? ${miSerie.serieVista()}`);

console.log(miSerie.toString());

miSerie.verEpisodio();
miSerie.verEpisodio();

console.log(`Episodios por mirar: ${miSerie.episodiosPorVer()}`);
console.log(`¿Viste toda la serie? ${miSerie.serieVista()}`);

console.log(miSerie.toString());


