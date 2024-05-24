
import aggregate, { AggregatedData } from '../aggregate/feature';
import retrieveData from './retrieveData';

export { type AggregatedData };

export default async function feature(id: string): Promise<AggregatedData>
{
    const data = await retrieveData(id);

    return aggregate(data);
}
