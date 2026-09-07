
import { type TenantId } from '@comify/common/domain/tenant';
import { type Identifier } from '@comify/common/primitives/identifier';
import generateId from '@comify/common/primitives/identifier/generate';

import { type Record } from '../definitions';

export default function (tenantId: TenantId, creatorId: Identifier, comicId?: Identifier, commentId?: Identifier, parentId?: Identifier): Record
{
    return {
        id: generateId(),
        tenantId,
        creatorId,
        comicId,
        commentId,
        parentId,
        createdAt: new Date().toISOString(),
        deleted: false
    };
}
