
import type { Middleware, NextHandler, Request } from 'jitar';
import { Response } from 'jitar';

import type { Tenant } from '^/domain/tenant';
import getByOrigin from '^/domain/tenant/getByOriginConverted';

const GEY_BY_ORIGIN_FQN = 'domain/tenant/getByOriginConverted';
const TENANT_PARAMETER = '*tenant';

export default class MultiTenantMiddleware implements Middleware
{
    readonly #tenants = new Map<string, Tenant>();

    async handle(request: Request, next: NextHandler): Promise<Response>
    {
        return request.fqn === GEY_BY_ORIGIN_FQN
            ? this.#getTenant(request)
            : this.#handleRequest(request, next);
    }

    async #resolveTenant(request: Request): Promise<Tenant>
    {
        const origin = request.getHeader('origin') as string;
        const tenant = this.#tenants.get(origin);

        if (tenant === undefined)
        {
            const tenant = await getByOrigin(origin);

            this.#tenants.set(origin, tenant);

            return tenant;
        }

        return tenant;
    }

    async #getTenant(request: Request): Promise<Response>
    {
        const tenant = await this.#resolveTenant(request);

        return new Response(200, tenant);
    }

    async #handleRequest(request: Request, next: NextHandler): Promise<Response>
    {
        const tenant = await this.#resolveTenant(request);

        request.setArgument(TENANT_PARAMETER, tenant);

        return next();
    }
}
