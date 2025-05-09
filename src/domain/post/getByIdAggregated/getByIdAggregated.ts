
import type { Requester } from '^/domain/authentication';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getById from '../getById';

export { type AggregatedData };

export default async function getByIdAggregated(requester: Requester, id: string): Promise<AggregatedData>
{
    const data = await getById(id);

    return aggregate(requester, data);
}
