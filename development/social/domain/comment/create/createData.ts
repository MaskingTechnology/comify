
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(message: string): DataModel
{
    return {
        id: generateId(),
        message
    };
}
