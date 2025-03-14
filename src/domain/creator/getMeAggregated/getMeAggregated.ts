
import type { Requester } from '^/domain/authentication';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getMe from '../getMe';

export default async function getMeAggregated(requester: Requester): Promise<AggregatedData>
{
    const data = await getMe(requester);

    return aggregate(data);
}
