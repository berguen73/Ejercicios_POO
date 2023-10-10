// Animales
// Crea una clase Animal con las propiedades nombre, edad y raza. Agrega los
// métodos hacer_sonido y moverse que permitan que el animal haga un sonido
// y se mueva.
// Luego, crea tres clases adicionales que hereden de Animal: Perro, Gato y
// Pájaro. Cada clase debe tener propiedades y métodos únicos para su tipo de
// animal.
// Por ejemplo, la clase Perro podría tener una propiedad adicional tamaño y un
// método buscar objeto. La clase Gato podría tener una propiedad adicional
// pelaje y un método jugar_con_juguete. La clase Pájaro podría tener una
// propiedad adicional tipo_de_pico y un método volar.


// Clase Animal.

abstract class Animal {
    private nombre: string;
    private edad: number;
    private raza: string;

    constructor (nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getRaza() {
        return this.raza;
    }

    abstract hacer_sonido();
    abstract moverse();
}


// Clase Perro. 

class Perro extends Animal {

    private tamaño: string;

    constructor (nombre: string, edad: number, raza: string, tamaño: string) {
        super(nombre, edad, raza);
        this.tamaño = tamaño
    }

hacer_sonido() {
    console.log("El perro está ladrando");
}

moverse() {
    console.log("El perro está corriendo por el patio");
}

buscarObjeto() {
    console.log("El perro está buscando la pelota para que se la tire.")
}


}


// Clase Gato. 

class Gato extends Animal {

    private pelaje: string;

    constructor (nombre: string, edad: number, raza: string, pelaje: string) {
        super(nombre, edad, raza);
        this.pelaje = pelaje
    }

    hacer_sonido() {
        console.log("El gato está maullando");
    }
    
    moverse() {
        console.log("El gato está trepando un árbol");
    }
    
    jugar_con_juguete() {
        console.log("El gato está jugando con un ovillo de lana")
    }
    
    
    }


// Clase Pájaro. 

    class Pajaro extends Animal {

        private tipo_de_pico: string;
    
        constructor (nombre: string, edad: number, raza: string, tipo_de_pico: string) {
            super(nombre, edad, raza);
            this.tipo_de_pico = tipo_de_pico;
        }
    
        hacer_sonido() {
            console.log("El pajaro está cantando");
        }
        
        moverse() {
            console.log("El pajaro está entrado a su nido");
        }
        
        volar() {
            console.log("El pajaro está volando")
        }
        
        
        }
    



// Creando instancias de cada subclase. 

const perro = new Perro("Hachiko", 3, "Akita", "Grande");
const gato = new Gato("Paquita", 8, "Angora", "Largo");
const pajaro = new Pajaro("Pajaro Loco", 5, "Pajaro Carpintero", "Fuerte")




// Probando para cada instancia
console.log(`El nombre de mi perro es ${perro.getNombre()}`);
console.log(`Mi perro tiene ${perro.getEdad()} años de edad`);
console.log(`Mi perro es de la raza ${perro.getRaza()}`);
perro.hacer_sonido();
perro.moverse();
perro.buscarObjeto();


console.log("---------------------------");

console.log(`El nombre de mi gata es ${gato.getNombre()}`);
console.log(`Mi gata tiene ${gato.getEdad()} años de edad`);
console.log(`Mi gata es de la raza ${gato.getRaza()}`);
gato.hacer_sonido();
gato.moverse();
gato.jugar_con_juguete();


console.log("---------------------------");

console.log(`A ese pajaro lo llamo ${pajaro.getNombre()}`);
console.log(`El pajaro tiene ${pajaro.getEdad()} años de edad`);
console.log(`Ese pajaro es de la raza ${pajaro.getRaza()}`);
pajaro.hacer_sonido();
pajaro.moverse();
pajaro.volar();

console.log("---------------------------");
