
import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getById from '../getById';

export default async function getByIdAggregated(tenantId: string, id: string): Promise<AggregatedData>
{
    const data = await getById(tenantId, id);

    return aggregate(data);
}
