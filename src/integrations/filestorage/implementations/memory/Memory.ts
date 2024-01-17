
import { FileStorage } from '../../definitions/interfaces.js';
import { NotConnected, FileNotFound } from '../../definitions/errors.js';

export default class Memory implements FileStorage
{
    #files?: Map<string, Buffer>;

    get connected()
    {
        return this.#files !== undefined;
    }

    async connect(): Promise<void>
    {
        this.#files = new Map();
    }

    async disconnect(): Promise<void>
    {
        if (this.#files === undefined)
        {
            throw new NotConnected();
        }

        this.#files = undefined;
    }

    async writeFile(path: string, data: Buffer): Promise<void>
    {
        const files = this.#getFiles();

        files.set(path, data);
    }

    async readFile(path: string): Promise<Buffer>
    {
        const files = this.#getFiles();

        const data = files.get(path);

        if (data === undefined)
        {
            throw new FileNotFound(path);
        }

        return data;
    }

    async deleteFile(path: string): Promise<void>
    {
        const files = this.#getFiles();

        if (files.has(path) === false)
        {
            throw new FileNotFound(path);
        }

        files.delete(path);
    }

    #getFiles(): Map<string, Buffer>
    {
        if (this.#files === undefined)
        {
            throw new NotConnected();
        }

        return this.#files;
    }
}
