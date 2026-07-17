
import type { ImageData } from '../definitions';

import createDataUrl from './createDataUrl';
import retrieveRecord from './retrieveRecord';
import retrieveFile from './retrieveFile';

export default async function run(id: string): Promise<ImageData>
{
    const record = await retrieveRecord(id);
    const file = await retrieveFile(record.storageKey);
    const dataUrl = createDataUrl(file, record.mimeType);

    return { dataUrl };
}
