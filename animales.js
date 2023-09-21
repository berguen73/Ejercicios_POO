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
// Clase Animal.
var Animal = /** @class */ (function () {
    function Animal(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    Animal.prototype.getNombre = function () {
        return this.nombre;
    };
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.getRaza = function () {
        return this.raza;
    };
    return Animal;
}());
// Clase Perro. 
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, edad, raza, tamaño) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tamaño = tamaño;
        return _this;
    }
    Perro.prototype.hacer_sonido = function () {
        console.log("El perro está ladrando");
    };
    Perro.prototype.moverse = function () {
        console.log("El perro está corriendo por el patio");
    };
    Perro.prototype.buscarObjeto = function () {
        console.log("El perro está buscando la pelota para que se la tire.");
    };
    return Perro;
}(Animal));
// Clase Gato. 
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, edad, raza, pelaje) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.pelaje = pelaje;
        return _this;
    }
    Gato.prototype.hacer_sonido = function () {
        console.log("El gato está maullando");
    };
    Gato.prototype.moverse = function () {
        console.log("El gato está trepando un árbol");
    };
    Gato.prototype.jugar_con_juguete = function () {
        console.log("El gato está jugando con un ovillo de lana");
    };
    return Gato;
}(Animal));
// Clase Pájaro. 
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(nombre, edad, raza, tipo_de_pico) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tipo_de_pico = tipo_de_pico;
        return _this;
    }
    Pajaro.prototype.hacer_sonido = function () {
        console.log("El pajaro está cantando");
    };
    Pajaro.prototype.moverse = function () {
        console.log("El pajaro está entrado a su nido");
    };
    Pajaro.prototype.volar = function () {
        console.log("El pajaro está volando");
    };
    return Pajaro;
}(Animal));
// Creando instancias de cada subclase. 
var perro = new Perro("Hachiko", 3, "Akita", "Grande");
var gato = new Gato("Paquita", 8, "Angora", "Largo");
var pajaro = new Pajaro("Pajaro Loco", 5, "Pajaro Carpintero", "Fuerte");
// Probando para cada instancia
console.log("El nombre de mi perro es ".concat(perro.getNombre()));
console.log("Mi perro tiene ".concat(perro.getEdad(), " a\u00F1os de edad"));
console.log("Mi perro es de la raza ".concat(perro.getRaza()));
perro.hacer_sonido();
perro.moverse();
perro.buscarObjeto();
console.log("---------------------------");
console.log("El nombre de mi gata es ".concat(gato.getNombre()));
console.log("Mi gata tiene ".concat(gato.getEdad(), " a\u00F1os de edad"));
console.log("Mi gata es de la raza ".concat(gato.getRaza()));
gato.hacer_sonido();
gato.moverse();
gato.jugar_con_juguete();
console.log("---------------------------");
console.log("A ese pajaro lo llamo ".concat(pajaro.getNombre()));
console.log("El pajaro tiene ".concat(pajaro.getEdad(), " a\u00F1os de edad"));
console.log("Ese pajaro es de la raza ".concat(pajaro.getRaza()));
pajaro.hacer_sonido();
pajaro.moverse();
pajaro.volar();
console.log("---------------------------");
