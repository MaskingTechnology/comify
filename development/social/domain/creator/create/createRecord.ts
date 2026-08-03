
import type { TenantId } from '@comify/common/domain/tenant';
import type { Identifier } from '@comify/common/primitives/identifier';
import generateId from '@comify/common/primitives/identifier/generate';

import type { FullName, Nickname, Email, Record } from '../definitions';

export default function (tenantId: TenantId, fullName: FullName, nickname: Nickname, email: Email, portraitId?: Identifier): Record
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
