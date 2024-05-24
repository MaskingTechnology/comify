
import aggregate, { type Result } from '../aggregate/feature';
import retrieveData from './retrieveData';

export { Result };

export default async function feature(id: string): Promise<Result>
{
    const data = await retrieveData(id);

    return aggregate(data);
}
