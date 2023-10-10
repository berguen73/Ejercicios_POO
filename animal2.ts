// Animales 2
// Crea una clase Animal con las propiedades nombre y edad. Agrega los
// métodos comer y dormir que permitan a un animal alimentarse y descansar.
// Luego, crea dos clases adicionales que hereden de Animal: Mamífero y
// Reptil. Cada clase debe tener propiedades y métodos únicos para su tipo
// de animal.
// Por ejemplo, la clase Mamífero podría tener una propiedad adicional pelaje
// y un método amamantar_crias. La clase Reptil podría tener una propiedad
// adicional escamas y un método regular_temperatura_corporal.
// Por último, crea una clase adicional Murciélago que herede de la clase
// Mamífero. Esta clase debe tener una propiedad adicional habilidades y un
// método utilizar_ecolocalizacion que permita al murciélago moverse y
// ubicarse en su entorno.

abstract class Animal_2 {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }


    abstract comer();
    abstract dormir();
}


class Mamifero extends Animal_2 {

    private pelaje: string;

    constructor(nombre: string, edad: number, pelaje: string) {
        super(nombre, edad);
        this.pelaje = pelaje;
    }

    comer() {
        console.log("Está alimentándose");
    }

    dormir() {
        console.log("Está descansando");
    }

    amamantar_crias() {
        console.log("El mamífero está amamantando a su cría")
    }


}

class Reptil extends Animal_2 {

    private escamas: string;

    constructor(nombre: string, edad: number, escamas: string) {
        super(nombre, edad);
        this.escamas = escamas;
    }

    comer() {
        console.log("Está alimentandose");
    }

    dormir() {
        console.log("Está descansando");
    }

    regular_temperatura_corporal() {
        console.log("El reptil está regulando su temperatura corporal")
    }


}


// Clase Murciélago
class Murcielago extends Mamifero {
    private habilidades: string;

    constructor(nombre: string, edad: number, pelaje: string, habilidades: string) {
        super(nombre, edad, pelaje);
        this.habilidades = habilidades;
    }

    utilizar_ecolocalizacion() {
        console.log("El murciélago está utilizando la ecolocalización para moverse y ubicarse en su entorno.");
    }
}

// Instancia de murciélago
const murcielago = new Murcielago("Batman", 5, "Negro", "Vuelo a ciegas");

console.log(`${murcielago.getNombre()}`);
murcielago.getNombre();
murcielago.comer();
murcielago.dormir();
murcielago.amamantar_crias();
murcielago.utilizar_ecolocalizacion();

// console.log(`${murcielago.getNombre()} ${murcielago.getNombre()};`);