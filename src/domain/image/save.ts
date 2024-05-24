
import type ImageData from './data/ImageData';
import createData from './data/create';
import fileExists from './files/exists';
import store from './files/store';
import ImageImport from './import/ImageImport';
import generateStorageKey from './utils/generateStorageKey';

export default async function save(type: string, image: ImageImport): Promise<ImageData>
{
    const storageKey = generateStorageKey(type, image.data);
    const alreadyStored = await fileExists(storageKey);

    if (alreadyStored === false)
    {
        await store(storageKey, image.data);
    }

    return createData(storageKey, image.filename, image.mimeType, image.size);
}
