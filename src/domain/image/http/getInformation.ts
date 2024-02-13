
import ImageData from '../data/ImageData';
import UnsupportedContentSize from '../errors/UnsupportedContentSize';
import UnsupportedMimeType from '../errors/UnsupportedMimeType';

export const CONTENT_TYPE = 'Content-Type';
export const CONTENT_LENGTH = 'Content-Length';
export const MAX_SIZE = 1024 * 1024 * 5;
export const VALID_MIME_TYPES = ['image/gif', 'image/jpeg', 'image/png'];

export default async function getInformation(imageUrl: string): Promise<ImageData>
{
    const response = await fetch(imageUrl, { method: 'HEAD' });

    const filename = imageUrl.split('/').pop() ?? '';
    const mimeType = response.headers.get(CONTENT_TYPE);
    const size = Number(response.headers.get(CONTENT_LENGTH) ?? 0);

    if (mimeType === null || VALID_MIME_TYPES.includes(mimeType) === false)
    {
        throw new UnsupportedMimeType();
    }

    if (length === null || size > MAX_SIZE)
    {
        throw new UnsupportedContentSize();
    }

    return new ImageData('', '', filename, mimeType, size);
}
