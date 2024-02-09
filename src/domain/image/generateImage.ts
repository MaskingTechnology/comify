
import ImageData from './data/ImageData';
import create from './data/create';
import download from './download';
import { UnsupportedContentSize, UnsupportedMimeType } from './errors';
import store from './files/store';

export default async function generateImage(picture: string, imageType: string): Promise<ImageData>
{
    const response = await fetch(picture, { method: 'HEAD' });
    const mimeType = response.headers.get('content-type');

    if (mimeType === null || ['image/gif', 'image/jpeg', 'image/png'].includes(mimeType) === false)
    {
        throw new UnsupportedMimeType;
    }

    const length = response.headers.get('content-length');
    const size = Number(length);

    if (length === null || size > 1024 * 1024 * 5)
    {
        throw new UnsupportedContentSize;
    }

    const buffer = await download(picture);

    const fileName: string = picture;
    const storageKey: string = `${imageType}/${fileName}`;

    await store(storageKey, buffer);

    return create(storageKey, fileName, mimeType, size);
}