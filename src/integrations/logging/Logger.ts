
import { LogProcessor } from './definitions/interfaces';

export default class Logger implements LogProcessor
{
    #processor: LogProcessor;
    #debugEnabled: boolean;

    constructor(processor: LogProcessor, debugEnabled: boolean = false)
    {
        this.#processor = processor;
        this.#debugEnabled = debugEnabled;
    }

    logInfo(message: string): Promise<void>
    {
        return this.#processor.logInfo(message);
    }

    logWarn(message: string): Promise<void>
    {
        return this.#processor.logWarn(message);
    }

    logError(message: string): Promise<void>
    {
        return this.#processor.logError(message);
    }

    logDebug(message: string): Promise<void>
    {
        if (this.#debugEnabled === false)
        {
            return Promise.resolve();
        }

        return this.#processor.logDebug(message);
    }
}
