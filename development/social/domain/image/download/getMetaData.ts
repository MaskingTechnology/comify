
import http from '@comify/common/integrations/http';

import type { MetaData } from '../definitions';

import ImageNotDownloaded from './ImageNotDownloaded';

const CONTENT_TYPE = 'Content-Type';
const CONTENT_LENGTH = 'Content-Length';

export default async function (url: URL): Promise<MetaData>
{
    const urlString = url.toString();

    const response = await http.head(urlString);

    if (response.ok === false)
    {
        throw new ImageNotDownloaded();
    }

    const filename = urlString.split('/').pop() ?? '';
    const mimeType = response.headers.get(CONTENT_TYPE) ?? '';
    const size = Number(response.headers.get(CONTENT_LENGTH) ?? 0);

    return { filename, mimeType, size };
}
