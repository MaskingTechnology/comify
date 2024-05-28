
import aggregate, { AggregatedData } from '../aggregate/feature';
import getById from '../getById/feature';

export default async function feature(id: string): Promise<AggregatedData>
{
    const data = await getById(id);

    return aggregate(data);
}
