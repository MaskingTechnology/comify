
import { type Identifier } from '@comify/common/primitives/identifier';

import { type ImageData } from '../definitions';
import { logger } from '../integrations';

import retrieveFiles from './retrieveFiles';
import retrieveRecords from './retrieveRecords';
import toImageData from './toImageData';

export default async function (ids: Identifier[]): Promise<Map<Identifier, ImageData>>
{
    const records = await retrieveRecords(ids);

    if (ids.length !== records.length)
    {
        logger.warn('Not all image records were retrieved');
    }

    const storageKeys = records.map(record => record.storageKey);

    const filesMap = await retrieveFiles(storageKeys);

    if (storageKeys.length !== filesMap.size)
    {
        logger.warn('Not all image files were retrieved');
    }

    return toImageData(records, filesMap);
}
