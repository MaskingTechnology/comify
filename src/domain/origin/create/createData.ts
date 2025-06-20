
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(tenantId: string, origin: string): DataModel
{
    return {
        id: generateId(),
        tenantId,
        origin,
    };
}
