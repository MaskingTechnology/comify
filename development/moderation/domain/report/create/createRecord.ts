
import { type TenantId } from '@comify/common/domain/tenant';
import { type Identifier } from '@comify/common/primitives/identifier';
import generateId from '@comify/common/primitives/identifier/generate';

import { type Reason, type Record, type Remark } from '../definitions';

export default function (tenantId: TenantId, reporterId: Identifier, postId: Identifier, reason: Reason, remark?: Remark): Record
{
    return {
        id: generateId(),
        tenantId,
        postId,
        reporterId,
        reason,
        remark,
        reviewed: false,
        createdAt: new Date().toISOString()
    };
}
