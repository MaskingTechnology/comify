
import type Requester from '^/domain/authentication/Requester';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByCreator from '../getByCreator/feature';

export { type AggregatedData };

export default async function feature(requester: Requester, creatorId: string): Promise<AggregatedData[]>
{
    const data = await getByCreator(creatorId);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
