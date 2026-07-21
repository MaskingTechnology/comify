
import type { Tenant } from '../definitions';

import retrieve from './retrieve';
import validate from './validate';

export default async function run(origin: string): Promise<Tenant>
{
    validate(origin);

    const tenant = await retrieve(origin);

    return {
        id: tenant.id,
        origin: origin
    };
}
