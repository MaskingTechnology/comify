
import generateStorageKey from './crypto/generateStorageKey';
import type ImageData from './data/ImageData';
import create from './data/create';
import exists from './files/exists';
import store from './files/store';

export default async function save(type: string, information: ImageData, content: Buffer): Promise<ImageData>
{
    const storageKey = generateStorageKey(type, content);
    const fileExists = await exists(storageKey);

    if (fileExists === false)
    {
        await store(storageKey, content);
    }

    return create(storageKey, information.filename, information.mimeType, information.size);
}
