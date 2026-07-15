
import type { ImageData } from '../definitions';

import createDataUrl from './createDataUrl';
import retrieveData from './retrieveData';
import retrieveFile from './retrieveFile';

export default async function run(id: string): Promise<ImageData>
{
    const data = await retrieveData(id);
    const file = await retrieveFile(data.storageKey);
    const dataUrl = createDataUrl(file, data.mimeType);

    return { dataUrl };
}
