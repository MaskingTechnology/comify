
import Requester from '^/domain/authentication/Requester';

import aggregate, { AggregatedData } from '../aggregate/feature';
import getMe from '../getMe/feature';

export default async function feature(requester: Requester): Promise<AggregatedData>
{
    const data = await getMe(requester);

    return aggregate(data);
}
