class Logger {
    private static instance: Logger;

    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public accederSistema(usuario: string) {
        console.log(`El usuario ${usuario} ingresó al sistema`);
    }
}

// Probando, probando, probando mi amor por ti:
const logger = Logger.getInstance();

logger.accederSistema("Gustavo_Cerati");
logger.accederSistema("Jorge_Drexler");
logger.accederSistema("Steve_Vai");


