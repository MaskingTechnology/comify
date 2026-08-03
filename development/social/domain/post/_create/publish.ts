
import { publish as publishPostAdded } from '@comify/common/domain/post/added';
import type { TenantId } from '@comify/common/domain/tenant';
import type { Identifier } from '@comify/common/primitives/identifier';

import { CONTEXT_ID } from '~/definitions';

export default async function (tenantId: TenantId, creatorId: Identifier, postId: Identifier, parentId?: Identifier): Promise<void>
{
    return publishPostAdded({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        postId,
        parentId
    });
}
