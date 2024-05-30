
import type Requester from '^/domain/authentication/Requester';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByPost from '../getByPost/feature';

export default async function feature(requester: Requester, postId: string): Promise<AggregatedData[]>
{
    const data = await getByPost(postId);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
