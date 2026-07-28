
import { publish as publishPostRemoved } from '@comify/common/domain/post/removed';

import { CONTEXT_ID } from '~/definitions';

export default async function (tenantId: string, creatorId: string, postId: string): Promise<void>
{
    return publishPostRemoved({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        postId
    });
}
