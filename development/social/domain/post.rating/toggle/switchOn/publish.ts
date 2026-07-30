
import { publish as publishRatingAdded } from '@comify/common/domain/post.rating/added';
import { type Requester } from '@comify/common/security';

import { CONTEXT_ID } from '~/definitions';

import { type RatingKey } from '../../definitions';

export default async function (requester: Requester, key: RatingKey): Promise<void>
{
    return publishRatingAdded({
        contextId: CONTEXT_ID,
        principalId: requester.principalId,
        tenantId: requester.tenantId,
        creatorId: key.creatorId,
        postId: key.postId
    });
}
