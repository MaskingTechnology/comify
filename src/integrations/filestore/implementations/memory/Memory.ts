
import { FileStore } from '../../definitions/interfaces.js';
import FileNotFound from '../../errors/FileNotFound.js';
import NotConnected from '../../errors/NotConnected.js';

export default class Memory implements FileStore
{
    #files = new Map<string, Buffer>();
    #connected = false;

    get connected() { return this.#connected; }

    async connect(): Promise<void>
    {
        this.#connected = true;
    }

    async disconnect(): Promise<void>
    {
        this.#connected = false;
    }

    async hasFile(path: string): Promise<boolean>
    {
        const files = this.#getFiles();

        return files.has(path);
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

    async clear(): Promise<void>
    {
        this.#files.clear();
    }
}
