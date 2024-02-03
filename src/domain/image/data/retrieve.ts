
import type Requester from '../../authentication/Requester';

import ImageData from './ImageData';

export default async function retrieve(id: string, requester?: Requester): Promise<ImageData>
{
    return new ImageData(id, 'storageKey', 'filename', 'mimetype', 0);
}
