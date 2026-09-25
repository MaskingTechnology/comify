
import { type Identifier } from '@comify/common/primitives/identifier';

import { type ImageData } from '../definitions';

import retrieveFiles from './retrieveFiles';
import retrieveRecords from './retrieveRecords';
import toImageData from './toImageData';

export default async function (ids: Identifier[]): Promise<Map<Identifier, ImageData>>
{
    const records = await retrieveRecords(ids);

    const storageKeys = records.map(record => record.storageKey);

    const filesMap = await retrieveFiles(storageKeys);

    return toImageData(records, filesMap);
}
