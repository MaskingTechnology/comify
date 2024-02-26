
import type ImageData from './data/ImageData';
import create from './data/create';
import exists from './files/exists';
import store from './files/store';
import ImageImport from './import/ImageImport.js';
import generateStorageKey from './utils/generateStorageKey';

export default async function save(type: string, image: ImageImport): Promise<ImageData>
{
    const storageKey = generateStorageKey(type, image.data);
    const fileExists = await exists(storageKey);

    if (fileExists === false)
    {
        await store(storageKey, image.data);
    }

    return create(storageKey, image.filename, image.mimeType, image.size);
}
