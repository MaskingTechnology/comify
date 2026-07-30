
import { publish as publishPostAdded } from '@comify/common/domain/post/added';

import { CONTEXT_ID } from '~/definitions';

export default async function (tenantId: string, creatorId: string, postId: string, parentId?: string): Promise<void>
{
    return publishPostAdded({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        postId,
        parentId
    });
}
