
import httpClient from '^/integrations/http/module';

import ImageNotDownloaded from '../errors/ImageNotDownloaded';
import ImageImport from './ImageImport';
import validate from './validate';

const CONTENT_TYPE = 'Content-Type';
const CONTENT_LENGTH = 'Content-Length';

export default async function fromUrl(imageUrl: string): Promise<ImageImport>
{
    const headResponse = await httpClient.head(imageUrl);

    if (headResponse.ok === false)
    {
        throw new ImageNotDownloaded();
    }

    const filename = imageUrl.split('/').pop() ?? '';
    const mimeType = headResponse.headers.get(CONTENT_TYPE) ?? '';
    const size = Number(headResponse.headers.get(CONTENT_LENGTH) ?? 0);

    validate(mimeType, size);

    const getResponse = await httpClient.get(imageUrl);

    if (getResponse.ok === false)
    {
        throw new ImageNotDownloaded();
    }

    const arrayBuffer = await getResponse.arrayBuffer();

    const data = Buffer.from(arrayBuffer);

    return new ImageImport(filename, mimeType, size, data);
}
