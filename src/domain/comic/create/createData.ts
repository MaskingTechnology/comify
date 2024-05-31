
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(imageId: string, structure?: string): DataModel
{
    return {
        id: generateId(),
        imageId,
        structure
    };
}
