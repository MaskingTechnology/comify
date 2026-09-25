
import { publish as publishPostRemoved } from '@comify/common/domain/post/removed';
import { type TenantId } from '@comify/common/domain/tenant';
import { type Identifier } from '@comify/common/primitives/identifier';

import { CONTEXT_ID } from '~/definitions';

export default async function (tenantId: TenantId, principalId: Identifier, postId: Identifier, parentId?: Identifier): Promise<void>
{
    return publishPostRemoved({
        contextId: CONTEXT_ID,
        principalId,
        tenantId,
        postId,
        parentId
    });
}
