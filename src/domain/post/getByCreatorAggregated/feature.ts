
import type { Requester } from '^/domain/authentication/types';
import validateRange from '^/domain/common/validateRange/feature';
import { Range } from '^/domain/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByCreator from '../getByCreator/feature';

export { type AggregatedData };

export default async function feature(requester: Requester, creatorId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getByCreator(creatorId, range.limit, range.offset);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
