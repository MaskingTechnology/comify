
import type { Requester } from '^/domain/authentication/types';
import retrieveRelationsByFollower from '^/domain/relation/getFollowing/feature';
import { Range } from '^/domain/types';

import type { DataModel } from '../types';
import retrieveData from './retrieveData';

export default async function feature(requester: Requester, range: Range): Promise<DataModel[]>
{
    const relationsData = await retrieveRelationsByFollower(requester, requester.id);

    const excludedCreatorIds = relationsData.map(data => data.followingId);
    excludedCreatorIds.push(requester.id);

    return retrieveData(excludedCreatorIds, range.offset, range.limit);
}
