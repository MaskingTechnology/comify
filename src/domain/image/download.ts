
import type ImageData from './data/ImageData';
import importFromUrl from './import/fromUrl';
import save from './save';

export default async function download(type: string, imageUrl: string): Promise<ImageData>
{
    const image = await importFromUrl(imageUrl);

    return save(type, image);
}
