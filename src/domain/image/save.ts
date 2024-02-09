
import create from './data/create.js';
import ImageData from './data/ImageData';
import store from './files/store.js';

export default async function save(buffer: Buffer, storageKey: string, fileName: string, mimeType: string, size: number): Promise<ImageData>
{
    await store(storageKey, buffer);

    return create(storageKey, fileName, mimeType, size);
}
