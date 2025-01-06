
import type { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/common/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByReaction from '../getByReaction/feature';

export default async function feature(requester: Requester, reactionId: string, range: Range): Promise<AggregatedData[]>
{
    const data = await getByReaction(reactionId, range.limit, range.offset);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
