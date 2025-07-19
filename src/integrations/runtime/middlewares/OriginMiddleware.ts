
import type { Middleware, NextHandler, Request } from 'jitar';
import { BadRequest, type Response } from 'jitar';

const TENANT_COOKIE_NAME = 'x-tenant-origin';

export default class OriginMiddleware implements Middleware
{
    async handle(request: Request, next: NextHandler): Promise<Response>
    {
        let fromCookie = true;

        let origin = this.#getOriginFromCookie(request);

        if (origin === undefined)
        {
            fromCookie = false;

            origin = this.#getOriginFromHeader(request);
        }

        if (origin === undefined)
        {
            throw new BadRequest('Missing origin');
        }

        request.setHeader('origin', origin);

        const response = await next();

        if (fromCookie === false)
        {
            this.#setOriginCookie(response, origin);
        }

        return response;
    }

    #getOriginFromHeader(request: Request): string | undefined
    {
        return request.getHeader('origin');
    }

    #getOriginFromCookie(request: Request): string | undefined
    {
        const header = request.getHeader('cookie');

        if (header === undefined)
        {
            return;
        }

        for (const cookie of header.split('; '))
        {
            const [key, value] = cookie.split('=');

            if (key === TENANT_COOKIE_NAME) 
            {
                return value;
            }
        }
    }

    #setOriginCookie(response: Response, origin: string): void
    {
        response.setHeader('Set-Cookie', `${TENANT_COOKIE_NAME}=${origin}; Path=/; HttpOnly=true; SameSite=Strict; Secure`);
    }
}
