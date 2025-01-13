
import { Requester } from '^/domain/authentication';
import validateRange, { Range } from '^/domain/common/validateRange';

import aggregate, { AggregatedData } from '../aggregate';
import getFollowers from '../getFollowers';

export default async function getFollowersAggregated(requester: Requester, followingId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getFollowers(requester, followingId, range.limit, range.offset);

    return Promise.all(data.map(aggregate));
}
