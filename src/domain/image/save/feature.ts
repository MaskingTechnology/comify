
import fileExists from './fileExists';
import generateStorageKey from './generateStorageKey';
import insertData, { type Data as Result } from './insertData';
import insertFile from './insertFile';

export { Result };

export type Image = {
    readonly filename: string;
    readonly mimeType: string;
    readonly size: number;
    readonly buffer: Buffer;
};

export default async function feature(type: string, image: Image): Promise<Result>
{
    const storageKey = generateStorageKey(type, image.buffer);
    const existingFile = await fileExists(storageKey);

    if (existingFile === false)
    {
        await insertFile(storageKey, image.buffer);
    }

    return insertData(storageKey, image.filename, image.mimeType, image.size);
}
