
import ImageImport from './ImageImport';
import validate from './validate';

export const CONTENT_TYPE = 'Content-Type';
export const CONTENT_LENGTH = 'Content-Length';

export default async function fromUrl(imageUrl: string): Promise<ImageImport>
{
    const headResponse = await fetch(imageUrl, { method: 'HEAD' });

    const filename = imageUrl.split('/').pop() ?? '';
    const mimeType = headResponse.headers.get(CONTENT_TYPE) ?? '';
    const size = Number(headResponse.headers.get(CONTENT_LENGTH) ?? 0);

    validate(mimeType, size);

    const getResponse = await fetch(imageUrl, { method: 'GET' });
    const arrayBuffer = await getResponse.arrayBuffer();

    const data = Buffer.from(arrayBuffer);

    return new ImageImport(filename, mimeType, size, data);
}
