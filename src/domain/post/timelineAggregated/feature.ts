
import type { Requester } from '^/domain/authentication/types';
import type { Range } from '^/domain/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import timeline from '../timeline/feature';

export default async function feature(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    const data = await timeline(requester, range);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
