
import { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/types';
import validateRange from '^/domain/validateRange';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import retrieveByFollower from '../getFollowing/feature';

export default async function feature(requester: Requester, followerId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await retrieveByFollower(requester, followerId, range.limit, range.offset);

    return Promise.all(data.map(aggregate));
}
