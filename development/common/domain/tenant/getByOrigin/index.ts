
import retrieveByOrigin from '../_retrieveByOrigin';
import type { Tenant } from '../definitions';

import validateData from './validateData';

export default async function getByOrigin(origin: string): Promise<Tenant>
{
    validateData({ origin });

    const tenant = await retrieveByOrigin(origin);

    return {
        id: tenant.id,
        origin: origin
    };
}
