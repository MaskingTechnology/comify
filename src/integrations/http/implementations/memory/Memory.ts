
import { Http } from '../../definitions/interfaces.js';

export default class Memory implements Http
{
    #entries = new Map<string, Response>();

    constructor()
    {
        this.#entries = new Map<string, Response>();
    }

    addEntry(method: string, url: string, response: Response): void
    {
        const id = this.#createId(method, url);

        this.#entries.set(id, response);
    }

    getEntry(method: string, url: string): Response
    {
        const id = this.#createId(method, url);
        const response = this.#entries.get(id);

        return response === undefined
            ? new Response(null, { status: 404 })
            : response;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async get(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getEntry('GET', url);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async post(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getEntry('POST', url);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async put(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getEntry('PUT', url);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async patch(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getEntry('PATCH', url);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async delete(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getEntry('DELETE', url);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async head(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return this.getEntry('HEAD', url);
    }

    #createId(method: string, url: string): string
    {
        return `${method.toUpperCase()} ${url.toLowerCase()}`;
    }
}
