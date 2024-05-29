
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(imageId: string, structure?: string): DataModel
{
    const id = generateId();

    return { id, imageId, structure };
}
