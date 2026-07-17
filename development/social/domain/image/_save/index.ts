
import type { Image } from '../definitions';

import createRecord from './createRecord';
import fileExists from './fileExists';
import generateStorageKey from './generateStorageKey';
import persist from './persist';
import insertFile from './insertFile';
import validate from './validate';

export default async function save(type: string, image: Image): Promise<string>
{
    const storageKey = generateStorageKey(type, image.buffer);
    const existingFile = await fileExists(storageKey);

    if (existingFile === false)
    {
        await insertFile(storageKey, image.buffer);
    }

    const record = createRecord(storageKey, image.filename, image.mimeType, image.size);

    validate(record);

    return persist(record);
}

export { default as InvalidImage } from './InvalidImage';
