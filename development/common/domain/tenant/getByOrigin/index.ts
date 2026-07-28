
import logger from '^/integrations/logging';

import type { Tenant } from '../definitions';

import retrieve from './retrieve';
import validate from './validate';
import TenantNotFound from './TenantNotFound';

export default async function (origin: string): Promise<Tenant>
{
    validate(origin);

    const record = await retrieve(origin);

    if (record === undefined)
    {
        logger.warn(`Tenant with origin '${origin}' could not be found.`);

        throw new TenantNotFound();
    }

    return { id: record.id, origin: origin };
}

export { TenantNotFound };
