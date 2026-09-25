
import { publish as publishRatingRemoved } from '@comify/common/domain/post.rating/removed';
import { type Requester } from '@comify/common/security';

import { CONTEXT_ID } from '~/definitions';

import { type RatingKey } from '../../definitions';

export default async function (requester: Requester, key: RatingKey): Promise<void>
{
    return publishRatingRemoved({
        contextId: CONTEXT_ID,
        principalId: requester.principalId,
        tenantId: requester.tenantId,
        creatorId: key.creatorId,
        postId: key.postId
    });
}
