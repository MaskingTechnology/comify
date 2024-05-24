
import retrieveData, { Data } from './retrieveData';

export { type Data };

export default async function feature(id: string): Promise<Data>
{
    return retrieveData(id);
}
