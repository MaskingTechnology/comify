
import getByOrigin from '../getByOrigin';
import type { Tenant } from '../types';
import validateData from './validateData';

export default async function getByOriginConverted(origin: string): Promise<Tenant>
{
    validateData({ origin });

    const tenant = await getByOrigin(origin);

    return {
        id: tenant.id,
        origin: origin
    };
}
