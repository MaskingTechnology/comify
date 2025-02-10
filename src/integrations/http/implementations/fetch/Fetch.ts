
import { HTTP_METHODS } from '../../definitions/constants';
import { Http } from '../../definitions/interfaces';

export default class Fetch implements Http
{
    get(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: HTTP_METHODS.GET, headers });
    }

    post(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: HTTP_METHODS.POST, headers, body: JSON.stringify(body) });
    }

    put(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: HTTP_METHODS.PUT, headers, body: JSON.stringify(body) });
    }

    patch(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: HTTP_METHODS.PATCH, headers, body: JSON.stringify(body) });
    }

    delete(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: HTTP_METHODS.DELETE, headers });
    }

    head(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: HTTP_METHODS.HEAD, headers });
    }
}
