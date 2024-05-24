
import type Requester from '^/domain/authentication/Requester';

import aggregate, { AggregatedData } from '../aggregate/feature';
import retrieveData from './retrieveData';

export { type AggregatedData };

export default async function feature(requester: Requester, id: string): Promise<AggregatedData>
{
    const data = await retrieveData(id);

    return aggregate(requester, data);
}
