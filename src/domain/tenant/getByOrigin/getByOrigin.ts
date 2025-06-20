
import findOrigin from '^/domain/origin/find';
import type { DataModel } from '^/domain/tenant';

import getById from '../getById';

export default async function getByOrigin(origin: string): Promise<DataModel | undefined>
{
    const data = await findOrigin(origin);

    if (data === undefined)
    {
        return;
    }

    return await getById(data.tenantId);
}
