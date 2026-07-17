
import http from '@comify/common/integrations/http';

import ImageNotDownloaded from './ImageNotDownloaded';

export default async function downloadImage(imageUrl: string): Promise<Buffer>
{
    const response = await http.get(imageUrl);

    if (response.ok === false)
    {
        throw new ImageNotDownloaded();
    }

    const arrayBuffer = await response.arrayBuffer();

    return Buffer.from(arrayBuffer);
}
