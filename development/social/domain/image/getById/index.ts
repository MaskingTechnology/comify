
import logger from '@comify/common/integrations/logging';

import type { ImageData } from '../definitions';

import createDataUrl from './createDataUrl';
import retrieveRecord from './retrieveRecord';
import retrieveFile from './retrieveFile';
import ImageNotFound from './ImageNotFound';

export default async function run(id: string): Promise<ImageData>
{
    const record = await retrieveRecord(id);

    if (record === undefined)
    {
        logger.warn(`Image with id '${id}' could not be found.`);

        throw new ImageNotFound();
    }

    const file = await retrieveFile(record.storageKey);

    const dataUrl = createDataUrl(file, record.mimeType);

    return { dataUrl };
}
