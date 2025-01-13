
import type { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/common/validateRange';

import aggregate from '../aggregate';
import type { AggregatedData } from '../aggregate/types';
import getByReaction from '../getByReaction/getByReaction';

export default async function getByReactionAggregated(requester: Requester, reactionId: string, range: Range): Promise<AggregatedData[]>
{
    const data = await getByReaction(reactionId, range.limit, range.offset);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
