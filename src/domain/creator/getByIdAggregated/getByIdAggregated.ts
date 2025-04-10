
import type { Requester } from '^/domain/authentication';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getById from '../getById';

export default async function getByIdAggregated(requester: Requester, id: string): Promise<AggregatedData>
{
    const data = await getById(id, requester.tenantId);

    return aggregate(data);
}
