
import createDataUrl from './createDataUrl';
import retrieveData from './retrieveData';
import retrieveFile from './retrieveFile';
import type { ImageData } from './types';

export default async function feature(id: string): Promise<ImageData>
{
    const data = await retrieveData(id);
    const file = await retrieveFile(data.storageKey);

    const dataUrl = createDataUrl(file, data.mimeType);

    return { dataUrl };
}
