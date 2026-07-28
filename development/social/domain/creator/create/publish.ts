
import { publish as publishCreatorAdded } from '@comify/common/domain/creator/added';

import { CONTEXT_ID } from '~/definitions';

export default async function (tenantId: string, creatorId: string): Promise<void>
{
    return publishCreatorAdded({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        creatorId
    });
}
