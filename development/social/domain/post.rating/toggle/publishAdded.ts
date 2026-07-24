
import { publish as publishRatingAdded } from '@comify/common/domain/post.rating/added';

import { CONTEXT_ID } from '~/definitions';

export default async function publish(tenantId: string, creatorId: string, postId: string, rated: boolean): Promise<void>
{
    return publishRatingAdded({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        creatorId,
        postId
    });
}
