
import type Requester from '^/domain/authentication/Requester';
import retrieveRelationsByFollower from '^/domain/relation/data/retrieveByFollower';

import type { DataModel } from '../types';
import retrieveData from './retrieveData';

export default async function feature(requester: Requester): Promise<DataModel[]>
{
    const relationsData = await retrieveRelationsByFollower(requester.id);

    const excludedCreatorIds = relationsData.map(data => data.followingId);
    excludedCreatorIds.push(requester.id);

    return retrieveData(excludedCreatorIds);
}
