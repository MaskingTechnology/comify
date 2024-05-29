
import httpClient from '^/integrations/http/module';

import type { MetaData } from '../types';
import ImageNotDownloaded from './ImageNotDownloaded';

const CONTENT_TYPE = 'Content-Type';
const CONTENT_LENGTH = 'Content-Length';

export default async function getMetaData(imageUrl: string): Promise<MetaData>
{
    const headResponse = await httpClient.head(imageUrl);

    if (headResponse.ok === false)
    {
        throw new ImageNotDownloaded();
    }

    const filename = imageUrl.split('/').pop() ?? '';
    const mimeType = headResponse.headers.get(CONTENT_TYPE) ?? '';
    const size = Number(headResponse.headers.get(CONTENT_LENGTH) ?? 0);

    return { filename, mimeType, size };
}
