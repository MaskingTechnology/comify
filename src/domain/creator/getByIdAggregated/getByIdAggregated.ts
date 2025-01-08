
import aggregate, { AggregatedData } from '../aggregate';
import getById from '../getById';

export default async function getByIdAggregated(id: string): Promise<AggregatedData>
{
    const data = await getById(id);

    return aggregate(data);
}
