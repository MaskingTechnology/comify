
import { Http } from './definitions/interfaces.js';

export default class Memory implements Http
{
    #implementation: Http;
    #cache = new Map<string, Response>();

    constructor(implementation: Http)
    {
        this.#implementation = implementation;
        this.#cache = new Map<string, Response>();
    }

    setCache(method: string, url: string, response: Response): void
    {
        const id = this.#createCacheId(method, url);

        this.#cache.set(id, response);
    }

    getCache(method: string, url: string): Response | undefined
    {
        const id = this.#createCacheId(method, url);

        return this.#cache.get(id);
    }

    removeCache(method: string, url: string): void
    {
        const id = this.#createCacheId(method, url);

        this.#cache.delete(id);
    }

    async get(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getCache('GET', url)
            ?? this.#implementation.get(url, headers);
    }

    async post(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getCache('POST', url)
            ?? this.#implementation.post(url, body, headers);
    }

    async put(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getCache('PUT', url)
            ?? this.#implementation.put(url, body, headers);
    }

    async patch(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getCache('PATCH', url)
            ?? this.#implementation.patch(url, body, headers);
    }

    async delete(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getCache('DELETE', url)
            ?? this.#implementation.delete(url, headers);
    }

    async head(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getCache('HEAD', url)
            ?? this.#implementation.head(url, headers);
    }

    #createCacheId(method: string, url: string): string
    {
        return `${method.toUpperCase()} ${url.toLowerCase()}`;
    }
}
