
import retrieveOtherCreators from '~/creator/_retrieveOthers';

import type { SortOrder, Record } from '../definitions';
import retrieveFollowing from '../_retrieveFollowing';

export default async function run(tenantId: string, requesterId: string, order: SortOrder, limit: number, offset: number, search: string | undefined = undefined): Promise<Record[]>
{
    const followingRecords = await retrieveFollowing(requesterId, requesterId);
    const followingIds = followingRecords.map(record => record.followingId);
    followingIds.push(requesterId);

    const creatorRecords = await retrieveOtherCreators(tenantId, followingIds, order, limit, offset, search);

    return creatorRecords.map(record =>
    {
        return { id: undefined, followerId: requesterId, followingId: record.id };
    });
}
