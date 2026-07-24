
import { publish as publishPostAdded } from '@comify/common/domain/post/added';

import { CONTEXT_ID } from '~/definitions';

export default async function publish(tenantId: string, creatorId: string, postId: string): Promise<void>
{
    return publishPostAdded({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        postId
    });
}
