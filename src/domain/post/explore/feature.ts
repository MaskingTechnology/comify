
import type Requester from '^/domain/authentication/Requester';
import retrieveRelationsByFollower from '^/domain/relation/data/retrieveByFollower';

import aggregate, { AggregatedData } from '../aggregate/feature';
import retrieveData from './retrieveData';

export { type AggregatedData };

export default async function feature(requester: Requester): Promise<AggregatedData[]>
{
    const relationsData = await retrieveRelationsByFollower(requester.id);

    const excludedIds = relationsData.map(data => data.followingId);
    excludedIds.push(requester.id);

    const data = await retrieveData(excludedIds);

    const aggregates = data.map(item => aggregate(requester, item));

    return Promise.all(aggregates);
}
