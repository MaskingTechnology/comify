
import { Requester } from '^/domain/authentication';
import validateRange, { Range } from '^/domain/common/validateRange';

import aggregate, { AggregatedData } from '../aggregate';
import retrieveByFollower from '../getFollowing';

export default async function getFollowingAggregated(requester: Requester, followerId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await retrieveByFollower(requester, followerId, range.limit, range.offset);

    return Promise.all(data.map(aggregate));
}
