
import { LogProcessor } from './definitions/interfaces';

export default class Logger implements LogProcessor
{
    readonly #processor: LogProcessor;
    readonly #debugEnabled: boolean;

    constructor(processor: LogProcessor, debugEnabled = false)
    {
        this.#processor = processor;
        this.#debugEnabled = debugEnabled;
    }

    logInfo(...message: unknown[]): Promise<void>
    {
        const messageString = this.#createMessage(message);

        return this.#processor.logInfo(messageString);
    }

    logWarn(...message: unknown[]): Promise<void>
    {
        const messageString = this.#createMessage(message);

        return this.#processor.logWarn(messageString);
    }

    logError(...message: unknown[]): Promise<void>
    {
        const messageString = this.#createMessage(message);

        return this.#processor.logError(messageString);
    }

    logDebug(...message: unknown[]): Promise<void>
    {
        if (this.#debugEnabled === false)
        {
            return Promise.resolve();
        }

        const messageString = this.#createMessage(message);

        return this.#processor.logDebug(messageString);
    }

    #createMessage(message: unknown[]): string
    {
        return message.map(value => this.#interpretValue(value)).join(' ');
    }

    #interpretValue(value: unknown): string
    {
        switch (typeof value)
        {
            case 'string': return value;
            case 'object': return this.#interpretObject(value);
            case 'undefined': return 'undefined';
            case 'function': return 'function';
            default: return String(value);
        }
    }

    #interpretObject(object: unknown): string
    {
        if (object === null)
        {
            return 'null';
        }

        if (Array.isArray(object))
        {
            return object.map(value => this.#interpretValue(value)).join(' ');
        }

        if (object instanceof Error)
        {
            return object.stack ?? object.message;
        }

        return JSON.stringify(object);
    }
}
