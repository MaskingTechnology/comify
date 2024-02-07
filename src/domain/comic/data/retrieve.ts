
import ComicData from './ComicData';

export default async function retrieve(id: string): Promise<ComicData>
{
    return new ComicData(id, 'imageId');
}
