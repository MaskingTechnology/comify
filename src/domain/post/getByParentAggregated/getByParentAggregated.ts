
import { Requester } from '^/domain/authentication';
import filterResolved from '^/domain/common/filterResolved';
import { Range } from '^/domain/common/validateRange';

import aggregate, { AggregatedData } from '../aggregate';
import getByParent from '../getByParent';

export default async function getByParentAggregated(requester: Requester, postId: string, range: Range): Promise<AggregatedData[]>
{
    const data = await getByParent(postId, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(requester, item));

    return filterResolved(aggregates);
}
