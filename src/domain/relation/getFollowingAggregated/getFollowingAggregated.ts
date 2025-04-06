
import type { Requester } from '^/domain/authentication';
import type { Range } from '^/domain/common/validateRange';
import validateRange from '^/domain/common/validateRange';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import retrieveByFollower from '../getFollowing';

export default async function getFollowingAggregated(requester: Requester, followerId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await retrieveByFollower(requester, followerId, range.limit, range.offset);

    return Promise.all(data.map(data => aggregate(requester, data)));
}
