
import Logger, { ConsoleDriver, DatabaseDriver, LogLevels, VoidDriver } from '@theshelf/logging';

import database from '^/integrations/database';

export const driver = (() =>
{
    switch (process.env.LOGGING_DRIVER)
    {
        case 'database': return new DatabaseDriver(database, process.env.LOGGING_DB_RECORD_TYPE ?? 'logs');
        case 'console': return new ConsoleDriver();
        default: return new VoidDriver();
    }
})();

const logger = new Logger(driver);

type LogLevel = keyof typeof LogLevels;

const logLevel = process.env.LOGGING_LEVEL as LogLevel;

logger.logLevel = LogLevels[logLevel] ?? LogLevels.DEBUG;

export default logger;
