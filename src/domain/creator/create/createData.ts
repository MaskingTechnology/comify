
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default async function createData(fullName: string, nickname: string, email: string, portraitId?: string, tenantId?: string): Promise<DataModel>
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
