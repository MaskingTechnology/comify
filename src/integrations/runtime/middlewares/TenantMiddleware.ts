
import type { Middleware, NextHandler, Request, Response } from 'jitar';

const TENANT_PARAMETER = '*tenant';

export default class TenantMiddleware implements Middleware
{
    readonly #cache = new Map<string, Response>();
    readonly #getTenantPath: string;

    constructor(tenantPath: string)
    {
        this.#getTenantPath = tenantPath;
    }

    async handle(request: Request, next: NextHandler): Promise<Response>
    {
        return request.fqn === this.#getTenantPath
            ? this.#getTenant(request, next)
            : this.#handleRequest(request, next);
    }

    async #getTenant(request: Request, next: NextHandler): Promise<Response>
    {
        const origin = this.#getOrigin(request);
        const cached = this.#cache.get(origin);

        if (cached === undefined)
        {
            request.setArgument('origin', origin);

            const response = await next();

            if (response.status === 200)
            {
                this.#cache.set(origin, response);
            }

            return response;
        }

        return cached;
    }

    async #handleRequest(request: Request, next: NextHandler): Promise<Response>
    {
        const origin = this.#getOrigin(request);
        const cached = this.#cache.get(origin);

        if (cached !== undefined)
        {
            request.setArgument(TENANT_PARAMETER, cached.result);
        }

        return next();
    }

    #getOrigin(request: Request): string
    {
        return request.getHeader('origin') as string;
    }
}
