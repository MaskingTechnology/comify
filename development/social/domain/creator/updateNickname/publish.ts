
import { publish as publishCreatorUpdated } from '@comify/common/domain/creator/updated';

import { CONTEXT_ID } from '~/definitions';

export default async function publish(tenantId: string, creatorId: string): Promise<void>
{
    return publishCreatorUpdated({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        creatorId
    });
}
