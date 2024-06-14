
import type { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByCreator from '../getByCreator/feature';

export { type AggregatedData };

export default async function feature(requester: Requester, creatorId: string, range: Range): Promise<AggregatedData[]>
{
    const data = await getByCreator(creatorId, range.offset, range.limit);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
