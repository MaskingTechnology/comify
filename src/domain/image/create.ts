
import ImageData from './data/ImageData';
import importFromDataUrl from './import/fromDataUrl';
import save from './save';

export default async function create(type: string, dataUrl: string): Promise<ImageData>
{
    const image = await importFromDataUrl(dataUrl);

    return save(type, image);
}
