
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Data } from '../definitions';

export default async function createData(tenantId: string, fullName: string, nickname: string, email: string, portraitId?: string): Promise<Data>
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
