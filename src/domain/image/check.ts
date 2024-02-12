
import ImageData from '../image/data/ImageData';
import { CONTENT_LENGTH, CONTENT_TYPE, MAX_SIZE, VALID_MIME_TYPES } from './data/constants';
import { UnsupportedContentSize } from './errors/UnsupportedContentSize';
import { UnsupportedMimeType } from './errors/UnsupportedMimeType';

export default async function check(picture: string): Promise<ImageData>
{
    const response = await fetch(picture, { method: 'HEAD' });
    const mimeType = response.headers.get(CONTENT_TYPE);

    if (mimeType === null || VALID_MIME_TYPES.includes(mimeType) === false)
    {
        throw new UnsupportedMimeType;
    }

    const length = response.headers.get(CONTENT_LENGTH);
    const size = Number(length);

    if (length === null || size > MAX_SIZE)
    {
        throw new UnsupportedContentSize;
    }

    const imageId: string = '';
    const storageKey: string = '';
    const fileName: string = '';

    return new ImageData(imageId, storageKey, fileName, mimeType, size);
}
