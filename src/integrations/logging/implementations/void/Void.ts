
import { LogProcessor } from '../../definitions/interfaces';

export default class Void implements LogProcessor
{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logInfo(message: string): Promise<void>
    {
        return Promise.resolve();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logWarn(message: string): Promise<void>
    {
        return Promise.resolve();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logError(message: string): Promise<void>
    {
        return Promise.resolve();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logDebug(message: string): Promise<void>
    {
        return Promise.resolve();
    }
}
