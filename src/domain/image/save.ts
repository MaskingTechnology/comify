
import type ImageData from './data/ImageData';
import createData from './data/createData';
import type ImageImport from './import/ImageImport.js';
import fileExists from './repository/checkFileExists';
import insertData from './repository/insertData';
import insertFile from './repository/insertFile';
import generateStorageKey from './utils/generateStorageKey';

export default async function save(type: string, image: ImageImport): Promise<ImageData>
{
    const storageKey = generateStorageKey(type, image.data);
    const alreadyStored = await fileExists(storageKey);

    if (alreadyStored === false)
    {
        await insertFile(storageKey, image.data);
    }

    const data = createData(storageKey, image.filename, image.mimeType, image.size);

    await insertData(data);

    return data;
}
