
import getByName from '^/domain/origin/get';
import type { DataModel } from '^/domain/tenant';

import getById from '../getById';

export default async function getByOrigin(name: string): Promise<DataModel | undefined>
{
    const origin = await getByName(name);

    if (origin === undefined)
    {
        return;
    }

    return getById(origin.tenantId);
}
