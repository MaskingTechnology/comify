
import { generateHash } from '../../integrations/utilities/crypto';
import ImageData from './data/ImageData';
import { UnsupportedContentSize, UnsupportedMimeType } from './errors';
import save from './save';

async function checkImage(picture: string): Promise<void>
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
}

export default async function download(picture: string, imageType: string): Promise<ImageData>
{
    await checkImage(picture);

    const response = await fetch(picture);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = response.headers.get('content-type') || '';
    const size = Number(response.headers.get('content-length')) || 0;

    const fileName: string = generateHash(picture);
    const storageKey: string = `${imageType}/${fileName}`;

    return save(buffer, storageKey, fileName, mimeType, size);
}
