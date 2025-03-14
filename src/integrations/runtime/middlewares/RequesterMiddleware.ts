
import type { Middleware, NextHandler, Request, Response } from 'jitar';

export default class RequesterMiddleware implements Middleware
{
    #authorization?: string;

    constructor(authorization?: string)
    {
        this.#authorization = authorization;
    }

    async handle(request: Request, next: NextHandler): Promise<Response>
    {
        if (this.#authorization !== undefined)
        {
            request.setHeader('Authorization', this.#authorization);
        }

        try
        {
            const response = await next();

            if (response.hasHeader('Authorization'))
            {
                this.#authorization = response.getHeader('Authorization')!;
            }

            return response;
        }
        catch (error)
        {
            if (error?.constructor?.name === 'Unauthorized')
            {
                this.#authorization = undefined;
            }

            throw error;
        }
    }
}
