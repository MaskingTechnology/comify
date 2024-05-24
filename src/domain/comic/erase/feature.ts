
import eraseImage from '../../image/erase';
import eraseData from './erase';

export default async function feature(id: string, imageId: string): Promise<void>
{
    await eraseData(id);
    await eraseImage(imageId);
}
