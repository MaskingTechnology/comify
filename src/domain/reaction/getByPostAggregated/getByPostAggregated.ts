
import { Requester } from '^/domain/authentication';
import filterResolved from '^/domain/common/filterResolved';
import { Range } from '^/domain/common/validateRange';

import aggregate, { AggregatedData } from '../aggregate';
import getByPost from '../getByPost';

export default async function getByPostAggregated(requester: Requester, postId: string, range: Range): Promise<AggregatedData[]>
{
    const data = await getByPost(postId, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(requester, item));

    return filterResolved(aggregates);
}
