
import { Http } from '../../definitions/interfaces';

export default class Fetch implements Http
{
    get(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: 'GET', headers });
    }

    post(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
    }

    put(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: 'PUT', headers, body: JSON.stringify(body) });
    }

    patch(url: string, body: unknown, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: 'PATCH', headers, body: JSON.stringify(body) });
    }

    delete(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: 'DELETE', headers });
    }

    head(url: string, headers?: Record<string, string> | undefined): Promise<Response>
    {
        return fetch(url, { method: 'HEAD', headers });
    }
}
