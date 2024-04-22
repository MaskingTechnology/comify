
import removeData from './data/remove';

export default async function remove(id: string): Promise<void>
{
    return removeData(id);
}
