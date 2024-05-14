
import eraseImage from '../image/erase';
import eraseData from './data/erase';
import retrieveData from './data/retrieve';

export default async function erase(id: string): Promise<void>
{
    const data = await retrieveData(id);

    await eraseData(data.id);
    await eraseImage(data.imageId);
}
