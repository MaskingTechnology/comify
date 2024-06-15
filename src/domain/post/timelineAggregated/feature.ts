
import type { Requester } from '^/domain/authentication/types';
import type { Range } from '^/domain/types';
import validateRange from '^/domain/validateRange';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import timeline from '../timeline/feature';

export default async function feature(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await timeline(requester, range.limit, range.offset);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
