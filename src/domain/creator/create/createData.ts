
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default async function createData(tenantId: string, fullName: string, nickname: string, email: string, portraitId?: string): Promise<DataModel>
{
    return {
        id: generateId(),
        fullName,
        nickname,
        email,
        portraitId: portraitId,
        tenantId,
        joinedAt: new Date().toISOString()
    };
}
