
import Logger, { ConsoleDriver, LogLevels, VoidDriver } from '@theshelf/logging';

export const driver = process.env.LOGGING_DRIVER === 'console'
    ? new ConsoleDriver()
    : new VoidDriver();

const appLogger = new Logger(driver, 'Comify');

type LogLevel = keyof typeof LogLevels;

const logLevel = process.env.LOGGING_LEVEL as LogLevel;

appLogger.logLevel = LogLevels[logLevel] ?? LogLevels.DEBUG;

export const shelfLogger = appLogger.for('TheShelf');

export default appLogger;
