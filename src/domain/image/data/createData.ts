
import { generateId } from '^/integrations/utilities/crypto';

import ImageData from './ImageData';

export default function createData(storageKey: string, filename: string, mimeType: string, size: number): ImageData
{
    const id = generateId();

    return new ImageData(id, storageKey, filename, mimeType, size);
}
