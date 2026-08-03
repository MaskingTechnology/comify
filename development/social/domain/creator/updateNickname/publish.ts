
import { publish as publishCreatorUpdated } from '@comify/common/domain/creator/updated';
import type { Identifier } from '@comify/common/primitives/identifier';
import type { TenantId } from '@comify/common/domain/tenant';

import { CONTEXT_ID } from '~/definitions';

export default async function (tenantId: TenantId, creatorId: Identifier): Promise<void>
{
    return publishCreatorUpdated({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        creatorId
    });
}
