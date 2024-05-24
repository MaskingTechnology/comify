
import eraseData from '../data/erase';
import retrieveData from '../get/retrieveData';

export default async function erase(id: string): Promise<void>
{
    const data = await retrieveData(id);

    return eraseData(data.id);
}
