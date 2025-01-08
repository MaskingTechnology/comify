
import { Requester } from '^/domain/authentication';
import retrieveRelationsByFollower from '^/domain/relation/getFollowing';

import type { DataModel } from '../types';
import retrieveData from './retrieveData';

export default async function explore(requester: Requester, limit: number, offset: number): Promise<DataModel[]>
{
    const relationsData = await retrieveRelationsByFollower(requester, requester.id);

    const excludedCreatorIds = relationsData.map(data => data.followingId);
    excludedCreatorIds.push(requester.id);

    return retrieveData(excludedCreatorIds, limit, offset);
}
