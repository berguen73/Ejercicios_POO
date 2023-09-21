var Logger = /** @class */ (function () {
    function Logger() {
        this.UsuariosLogueados = [];
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.accederSistema = function (usuario) {
        var timestamp = new Date().toLocaleString();
        var Entrada = "El usuario '".concat(usuario, "' accedi\u00F3 al sistema.");
        this.UsuariosLogueados.push(Entrada);
    };
    Logger.prototype.mostrarLog = function () {
        console.log("Registro de accesos:");
        this.UsuariosLogueados.forEach(function (entrada, index) {
            console.log("".concat(index + 1, ". ").concat(entrada));
        });
    };
    return Logger;
}());
// Ejemplo de uso:
var logger = Logger.getInstance();
logger.accederSistema("Gustavo_Cerati");
logger.accederSistema("Indio_Solari");
logger.accederSistema("Skay_Beilinson");
// Pruebo adrede el mismo usuario que antes
logger.accederSistema("Skay_Beilinson");
logger.accederSistema("Pity_Alvarez");
logger.mostrarLog();
