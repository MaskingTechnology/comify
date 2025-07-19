
import getByOrigin from '../getByOrigin';
import type { Tenant } from '../types';

export default async function getFormatted(origin: string): Promise<Tenant>
{
    const tenant = await getByOrigin(origin);

    return {
        id: tenant.id,
        origin: origin
    };
}
