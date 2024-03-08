
import removeData from './data/remove';
import retrieveData from './data/retrieve';

export default async function remove(id: string): Promise<void>
{
    const data = await retrieveData(id);

    return removeData(data.id);
}
