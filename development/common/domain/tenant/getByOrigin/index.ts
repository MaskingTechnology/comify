
import type { Tenant } from '../definitions';
import retrieveByOrigin from '../_retrieveByOrigin';

import validateData from './validateData';

export default async function run(origin: string): Promise<Tenant>
{
    validateData({ origin });

    const tenant = await retrieveByOrigin(origin);

    return {
        id: tenant.id,
        origin: origin
    };
}
