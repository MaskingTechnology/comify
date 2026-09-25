
import http from '@comify/common/integrations/http';

import ImageNotDownloaded from './ImageNotDownloaded';

export default async function (url: URL): Promise<Buffer>
{
    const urlString = url.toString();

    const response = await http.get(urlString);

    if (response.ok === false)
    {
        throw new ImageNotDownloaded();
    }

    const arrayBuffer = await response.arrayBuffer();

    return Buffer.from(arrayBuffer);
}
