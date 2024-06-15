
import type { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/types';
import validateRange from '^/domain/validateRange';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getFollowers from '../getFollowers/feature';

export default async function feature(requester: Requester, followingId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getFollowers(requester, followingId, range.limit, range.offset);

    return Promise.all(data.map(aggregate));
}
