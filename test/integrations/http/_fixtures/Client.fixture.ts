
import Client from '^/integrations/http/Client';
import { HTTP_METHODS } from '^/integrations/http/definitions/constants';
import { Http } from '^/integrations/http/definitions/interfaces';

const URLS =
{
    CACHED: 'http://localhost/cached',
    NOT_CACHED: 'http://localhost/not-cached'
};

const RESPONSES =
{
    CACHED: new Response('Cached', { status: 200 }),
    NOT_CACHED: new Response('Not cached', { status: 200 })
};

class MonoResponse implements Http
{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async get(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return RESPONSES.NOT_CACHED;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async post(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return RESPONSES.NOT_CACHED;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async put(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return RESPONSES.NOT_CACHED;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async patch(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return RESPONSES.NOT_CACHED;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async delete(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return RESPONSES.NOT_CACHED;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async head(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return RESPONSES.NOT_CACHED;
    }
}

const implementation = new MonoResponse();
const httpClient = new Client(implementation);

httpClient.setCache(HTTP_METHODS.GET, URLS.CACHED, RESPONSES.CACHED);
httpClient.setCache(HTTP_METHODS.POST, URLS.CACHED, RESPONSES.CACHED);
httpClient.setCache(HTTP_METHODS.PUT, URLS.CACHED, RESPONSES.CACHED);
httpClient.setCache(HTTP_METHODS.PATCH, URLS.CACHED, RESPONSES.CACHED);
httpClient.setCache(HTTP_METHODS.DELETE, URLS.CACHED, RESPONSES.CACHED);
httpClient.setCache(HTTP_METHODS.HEAD, URLS.CACHED, RESPONSES.CACHED);

export { RESPONSES, URLS, httpClient };
