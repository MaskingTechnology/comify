
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import createCommentReaction from '^/domain/post/createWithComment';
import { tenant } from '^/domain/tenant';

export default function useCreateComment(postId: string, onCreated: (reactionId: string) => void)
{
    return useCallback(async (comment: string) =>
    {
        const reactionId = await createCommentReaction(tenant, requester, comment, postId);

        onCreated(reactionId);

    }, [postId, onCreated]);
}
