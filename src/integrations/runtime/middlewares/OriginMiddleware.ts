
import type { Middleware, NextHandler, Request, Response } from 'jitar';
import { BadRequest } from 'jitar';

import type { ValidationSchema } from '@theshelf/validation';
import validator from '@theshelf/validation';

const ORIGIN_COOKIE_NAME = 'x-client-origin';
const schema: ValidationSchema =
{
    origin:
    {
        message: 'Invalid origin',
        URL:
        {
            required: true
        }
    }
};

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

        this.#validateOriginValue(origin);

        // The origin header is validated and set here for use in other middlewares
        request.setHeader('origin', origin!);

        const response = await next();

        if (fromCookie === false)
        {
            this.#setOriginCookie(response, origin as string);
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

        for (const cookie of header.split(';'))
        {
            const [key, value] = cookie.split('=');

            if (key.trim() === ORIGIN_COOKIE_NAME) 
            {
                return value?.trim();
            }
        }
    }

    #validateOriginValue(value: string | undefined): void
    {
        const result = validator.validate({ origin: value }, schema);

        if (result.invalid)
        {
            throw new BadRequest('Invalid origin');
        }
    }

    #setOriginCookie(response: Response, origin: string): void
    {
        response.setHeader('Set-Cookie', `${ORIGIN_COOKIE_NAME}=${origin}; Path=/; HttpOnly=true; SameSite=None; Secure`);
    }
}
