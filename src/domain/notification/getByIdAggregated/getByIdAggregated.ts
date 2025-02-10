
import { Requester } from '^/domain/authentication';

import aggregate, { AggregatedData } from '../aggregate';
import getById from '../getById';

export default async function getByIdAggregated(requester: Requester, id: string): Promise<AggregatedData>
{
    const data = await getById(id);

    return aggregate(requester, data);
}
