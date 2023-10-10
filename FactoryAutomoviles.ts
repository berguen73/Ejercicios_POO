
// Clase de Vehículos
class Vehiculos {
    crearVehiculo(tipo: string, marca: string, modelo: string, asientos: number, capacidadCarga: number): Caracteristicas {
        if (tipo === 'Auto') {
            return new Auto(marca, modelo, asientos, capacidadCarga);
        } else if (tipo === 'Camioneta') {
            return new Camioneta(marca, modelo, asientos, capacidadCarga);
        } else {
            throw new Error('Tipo de vehículo no válido');
        }
    }
}

// Interfaz para los detalles del vehículo
interface Caracteristicas {
    marca: string;
    modelo: string;
    asientos: number;
    capacidadCarga: number;
    mostrarDetalles();
}


// Clase para Auto
class Auto implements Caracteristicas {
    public marca: string;
    public modelo: string;
    public asientos: number;
    public capacidadCarga: number;


    constructor(marca: string, modelo: string, asientos: number, capacidadCarga: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.capacidadCarga = capacidadCarga;
    }

    mostrarDetalles() {
        console.log(`Auto: ${this.marca} ${this.modelo}, Asientos: ${this.asientos}, Capacidad de Carga: ${this.capacidadCarga}`);
    }
}

// Clase para Camioneta
class Camioneta implements Caracteristicas {
    public marca: string;
    public modelo: string;
    public asientos: number;
    public capacidadCarga: number;


    constructor(marca: string, modelo: string, asientos: number, capacidadCarga: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.capacidadCarga = capacidadCarga;
    }
    mostrarDetalles() {
        console.log(`Camioneta: ${this.marca} ${this.modelo}, Asientos: ${this.asientos}, Capacidad de Carga: ${this.capacidadCarga}`);
    }
}


// A rodar, a rodar, a rodar, a rodar mi vida:
const vehiculosFactory = new Vehiculos();

// Creo un auto: 
const auto = vehiculosFactory.crearVehiculo('Auto', 'Volkswagen', 'Nivus', 5, 220);

// Creo una camioneta:
const camioneta = vehiculosFactory.crearVehiculo('Camioneta', 'Ford', 'Maverick', 5, 1000);

// Creo un colectivo, que no existe en realidad: 
const colectivo = vehiculosFactory.crearVehiculo('Colectivo', 'Mercedes Benz', '1114', 40, 3000);

auto.mostrarDetalles();
camioneta.mostrarDetalles();
colectivo.mostrarDetalles();


