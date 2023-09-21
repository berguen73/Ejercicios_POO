// Clase creadora de Vehículos
var Vehiculos = /** @class */ (function () {
    function Vehiculos() {
    }
    Vehiculos.prototype.crearVehiculo = function (tipo, marca, modelo, asientos, capacidadCarga) {
        if (tipo === 'Auto') {
            return new Auto(marca, modelo, asientos, capacidadCarga);
        }
        else if (tipo === 'Camioneta') {
            return new Camioneta(marca, modelo, asientos, capacidadCarga);
        }
        else {
            throw new Error('Tipo de vehículo no válido');
        }
    };
    return Vehiculos;
}());
// Clase para Auto
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, asientos, capacidadCarga) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.capacidadCarga = capacidadCarga;
    }
    Auto.prototype.mostrarDetalles = function () {
        console.log("Auto: ".concat(this.marca, " ").concat(this.modelo, ", Asientos: ").concat(this.asientos, ", Capacidad de Carga: ").concat(this.capacidadCarga));
    };
    return Auto;
}());
// Clase concreta para Camioneta
var Camioneta = /** @class */ (function () {
    function Camioneta(marca, modelo, asientos, capacidadCarga) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.capacidadCarga = capacidadCarga;
    }
    Camioneta.prototype.mostrarDetalles = function () {
        console.log("Camioneta: ".concat(this.marca, " ").concat(this.modelo, ", Asientos: ").concat(this.asientos, ", Capacidad de Carga: ").concat(this.capacidadCarga));
    };
    return Camioneta;
}());
// A probar:
var vehiculosFactory = new Vehiculos();
// Creo un auto: 
var auto = vehiculosFactory.crearVehiculo('Auto', 'Volkswagen', 'Nivus', 5, 220);
// Creo una camioneta:
var camioneta = vehiculosFactory.crearVehiculo('Camioneta', 'Ford', 'Maverick', 5, 1000);
// Creo un colectivo, que no existe en realidad: 
var colectivo = vehiculosFactory.crearVehiculo('Colectivo', 'Mercedes Benz', '1114', 40, 3000);
auto.mostrarDetalles();
camioneta.mostrarDetalles();
colectivo.mostrarDetalles();
