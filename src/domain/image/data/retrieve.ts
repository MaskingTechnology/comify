
import ImageData from './ImageData';

export default async function retrieve(id: string): Promise<ImageData>
{
    return new ImageData(id, 'storageKey', 'filename', 'mimetype', 0);
}
