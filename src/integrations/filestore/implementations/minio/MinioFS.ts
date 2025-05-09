
import type { ClientOptions } from 'minio';
import { Client } from 'minio';

import type { FileStore } from '../../definitions/interfaces';
import FileNotFound from '../../errors/FileNotFound';
import NotConnected from '../../errors/NotConnected';

const BUCKET_NAME = 'comify';

export default class MinioFS implements FileStore
{
    readonly #configuration: ClientOptions;
    #client?: Client;

    constructor(configuration: ClientOptions)
    {
        this.#configuration = configuration;
    }

    get connected()
    {
        return this.#client !== undefined;
    }

    async connect(): Promise<void>
    {
        this.#client = new Client(this.#configuration);

        if (await this.#client.bucketExists(BUCKET_NAME) === false)
        {
            await this.#client.makeBucket(BUCKET_NAME);
        }
    }

    async disconnect(): Promise<void>
    {
        if (this.#client === undefined)
        {
            throw new NotConnected();
        }

        this.#client = undefined;
    }

    async hasFile(path: string): Promise<boolean>
    {
        const client = this.#getClient();

        try
        {
            await client.statObject(BUCKET_NAME, path);

            return true;
        }
        catch (error)
        {
            const customError = this.#handleError(error, path);

            if (customError instanceof FileNotFound)
            {
                return false;
            }

            throw error;
        }
    }

    async writeFile(path: string, data: Buffer): Promise<void>
    {
        const client = this.#getClient();

        try
        {
            await client.putObject(BUCKET_NAME, path, data);
        }
        catch (error)
        {
            throw this.#handleError(error, path);
        }
    }

    async readFile(path: string): Promise<Buffer>
    {
        const client = this.#getClient();

        try
        {
            const stream = await client.getObject(BUCKET_NAME, path);
            const chunks = await stream.toArray();

            return Buffer.concat(chunks);
        }
        catch (error)
        {
            throw this.#handleError(error, path);
        }
    }

    async deleteFile(path: string): Promise<void>
    {
        const client = this.#getClient();

        try
        {
            await client.removeObject(BUCKET_NAME, path);
        }
        catch (error)
        {
            throw this.#handleError(error, path);
        }
    }

    async clear(): Promise<void>
    {
        return;  // Deliberately not implemented
    }

    #getClient(): Client
    {
        if (this.#client === undefined)
        {
            throw new NotConnected();
        }

        return this.#client;
    }

    #handleError(error: unknown, path: string): unknown
    {
        if (error instanceof Error && this.#isNotFoundError(error))
        {
            return new FileNotFound(path);
        }

        return error;
    }

    #isNotFoundError(error: Error): boolean
    {
        return error.message.startsWith('The specified key does not exist')
            || error.message.startsWith('Not Found');
    }
}
