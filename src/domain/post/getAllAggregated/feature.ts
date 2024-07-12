
import type { Requester } from '^/domain/authentication/types';
import type { Range } from '^/domain/common/types';
import validateRange from '^/domain/common/validateRange/feature';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getAll from '../getAll/feature';

export default async function feature(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getAll(requester, range.limit, range.offset);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
