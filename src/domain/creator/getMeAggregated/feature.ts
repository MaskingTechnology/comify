
import { Requester } from '^/domain/authentication/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getMe from '../getMe/feature';

export default async function feature(requester: Requester): Promise<AggregatedData>
{
    const data = await getMe(requester);

    return aggregate(data);
}
