
/* eslint no-console: "off" */
import { LogProcessor } from '../../definitions/interfaces';

export default class Console implements LogProcessor
{
    async logInfo(message: string): Promise<void>
    {
        return console.info(message);
    }

    async logWarn(message: string): Promise<void>
    {
        return console.warn(message);
    }

    async logError(message: string): Promise<void>
    {
        return console.error(message);
    }

    async logDebug(message: string): Promise<void>
    {
        return console.debug(message);
    }
}
