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
var Animal_2 = /** @class */ (function () {
    function Animal_2(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Animal_2.prototype.getNombre = function () {
        return this.nombre;
    };
    Animal_2.prototype.getEdad = function () {
        return this.edad;
    };
    return Animal_2;
}());
var Mamifero = /** @class */ (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero(nombre, edad, pelaje) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.pelaje = pelaje;
        return _this;
    }
    Mamifero.prototype.comer = function () {
        console.log("Esta alimentandose");
    };
    Mamifero.prototype.dormir = function () {
        console.log("Esta descansando");
    };
    Mamifero.prototype.amamantar_crias = function () {
        console.log("El mamífero está amamantando a su cría");
    };
    return Mamifero;
}(Animal_2));
var Reptil = /** @class */ (function (_super) {
    __extends(Reptil, _super);
    function Reptil(nombre, edad, escamas) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.escamas = escamas;
        return _this;
    }
    Reptil.prototype.comer = function () {
        console.log("Esta alimentandose");
    };
    Reptil.prototype.dormir = function () {
        console.log("Esta descansando");
    };
    Reptil.prototype.regular_temperatura_corporal = function () {
        console.log("El reptil esta regulando su temperatura corporal");
    };
    return Reptil;
}(Animal_2));
// Clase Murciélago
var Murcielago = /** @class */ (function (_super) {
    __extends(Murcielago, _super);
    function Murcielago(nombre, edad, pelaje, habilidades) {
        var _this = _super.call(this, nombre, edad, pelaje) || this;
        _this.habilidades = habilidades;
        return _this;
    }
    Murcielago.prototype.utilizar_ecolocalizacion = function () {
        console.log("El murciélago está utilizando la ecolocalización para moverse y ubicarse en su entorno.");
    };
    return Murcielago;
}(Mamifero));
// Instancia de murciélago
var murcielago = new Murcielago("Batman", 5, "Negro", "Vuelo a ciegas");
console.log("".concat(murcielago.getNombre()));
murcielago.getNombre();
murcielago.comer();
murcielago.dormir();
murcielago.amamantar_crias();
murcielago.utilizar_ecolocalizacion();
// console.log(`${murcielago.getNombre()} ${murcielago.getNombre()};`);
