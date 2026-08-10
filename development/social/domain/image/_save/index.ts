
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Image } from '../definitions';

import createRecord from './createRecord';
import fileExists from './fileExists';
import generateStorageKey from './generateStorageKey';
import persist from './persist';
import insertFile from './insertFile';

export default async function (type: string, image: Image): Promise<Identifier>
{
    const storageKey = generateStorageKey(type, image.buffer);

    const existingFile = await fileExists(storageKey);

    if (existingFile === false)
    {
        await insertFile(storageKey, image.buffer);
    }

    const record = createRecord(storageKey, image.filename, image.mimeType, image.size);

    return persist(record);
}
