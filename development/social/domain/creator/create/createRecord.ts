
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Record } from '../definitions';

export default function (tenantId: string, fullName: string, nickname: string, email: string, portraitId?: string): Record
{
    return {
        id: generateId(),
        fullName,
        nickname,
        email,
        portraitId,
        tenantId,
        joinedAt: new Date().toISOString()
    };
}
