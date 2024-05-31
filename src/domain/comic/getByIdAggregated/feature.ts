
import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getById from '../getById/feature';

export default async function feature(id: string): Promise<AggregatedData>
{
    const data = await getById(id);

    return aggregate(data);
}
