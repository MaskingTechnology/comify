
import { Client, ClientOptions } from 'minio';

import { FileStorage } from '../../definitions/interfaces.js';
import { NotConnected, FileNotFound } from '../../definitions/errors.js';

const BUCKET_NAME = 'comify';

export default class MinioFS implements FileStorage
{
    #configuration: ClientOptions;
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

    async writeFile(path: string, data: Buffer): Promise<void>
    {
        const client = this.#getClient();

        try
        {
            await client.putObject(BUCKET_NAME, path, data);
        }
        catch (error: unknown)
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
        catch (error: unknown)
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
        catch (error: unknown)
        {
            throw this.#handleError(error, path);
        }
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
        if (error instanceof Error && error.message.startsWith('The specified key does not exist'))
        {
            return new FileNotFound(path);
        }

        return error;
    }
}
