
import http from '^/integrations/http';

import ImageNotDownloaded from './ImageNotDownloaded';

export default async function downloadImage(imageUrl: string): Promise<Buffer>
{
    const getResponse = await http.get(imageUrl);

    if (getResponse.ok === false)
    {
        throw new ImageNotDownloaded();
    }

    const arrayBuffer = await getResponse.arrayBuffer();

    return Buffer.from(arrayBuffer);
}
