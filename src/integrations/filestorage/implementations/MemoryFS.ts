
import { FileStorage } from '../definitions/interfaces.js';
import { FileNotFound } from '../definitions/errors.js';

export default class MemoryFS implements FileStorage
{
    #files: Map<string, Buffer> = new Map();

    async connect(): Promise<void> { }

    async disconnect(): Promise<void> { }

    async storeFile(path: string, data: Buffer): Promise<void>
    {
        this.#files.set(path, data);
    }

    async readFile(path: string): Promise<Buffer>
    {
        const data = this.#files.get(path);

        if (data === undefined)
        {
            throw new FileNotFound(path);
        }

        return data;
    }

    async deleteFile(path: string): Promise<void>
    {
        if (this.#files.has(path) === false)
        {
            throw new FileNotFound(path);
        }

        this.#files.delete(path);
    }
}
