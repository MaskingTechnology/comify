
import { generateId } from '^/integrations/utilities/crypto';

import ComicData from './ComicData';

export default function createData(imageId: string, structure?: string): ComicData
{
    const id = generateId();

    return new ComicData(id, imageId, structure);
}
