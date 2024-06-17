
import type { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/common/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByPost from '../getByPost/feature';

export default async function feature(requester: Requester, postId: string, range: Range): Promise<AggregatedData[]>
{
    const data = await getByPost(postId, range.limit, range.offset);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
