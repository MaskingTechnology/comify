
import type Requester from '^/domain/authentication/Requester';

import aggregate, { AggregatedData } from '../aggregate/feature';
import retrieveData from './retrieveData';

export { type AggregatedData };

export default async function feature(requester: Requester, creatorId: string): Promise<AggregatedData[]>
{
    const data = await retrieveData(creatorId);

    const aggregates = data.map(item => aggregate(requester, item));

    return Promise.all(aggregates);
}
