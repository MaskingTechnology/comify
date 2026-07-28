
import { publish as publishRatingRemoved } from '@comify/common/domain/post.rating/removed';

import { CONTEXT_ID } from '~/definitions';

export default async function (tenantId: string, creatorId: string, postId: string, rated: boolean): Promise<void>
{
    return publishRatingRemoved({
        contextId: CONTEXT_ID,
        principalId: creatorId,
        tenantId,
        creatorId,
        postId
    });
}
