
import { Middleware, Request, Response, NextHandler } from 'jitar';

export default class RequesterMiddleware implements Middleware
{
    #authorization?: string;

    async handle(request: Request, next: NextHandler): Promise<Response>
    {
        if (this.#authorization !== undefined)
        {
            request.setHeader('Authorization', this.#authorization);
        }

        const response = await next();

        if (response.headers.has('Authorization'))
        {
            this.#authorization = response.getHeader('Authorization')!;
        }

        return response;
    }
}
