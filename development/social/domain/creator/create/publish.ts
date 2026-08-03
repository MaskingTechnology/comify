
import { publish as publishCreatorAdded } from '@comify/common/domain/creator/added';
import type { TenantId } from '@comify/common/domain/tenant';
import type { Identifier } from '@comify/common/primitives/identifier';

import { CONTEXT_ID } from '~/definitions';

export default async function (tenantId: TenantId, creatorId: Identifier): Promise<void>
{
    return publishCreatorAdded({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        creatorId
    });
}
