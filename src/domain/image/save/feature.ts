
import type { Image } from '../types';
import createData from './createData';
import fileExists from './fileExists';
import generateStorageKey from './generateStorageKey';
import insertData from './insertData';
import insertFile from './insertFile';
import validateData from './validateData';

export default async function feature(type: string, image: Image): Promise<string>
{
    const storageKey = generateStorageKey(type, image.buffer);
    const existingFile = await fileExists(storageKey);

    if (existingFile === false)
    {
        await insertFile(storageKey, image.buffer);
    }

    const data = createData(storageKey, image.filename, image.mimeType, image.size);

    validateData(data);

    return insertData(data);
}
