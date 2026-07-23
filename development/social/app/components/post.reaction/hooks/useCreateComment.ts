
import { useCallback } from 'react';

import { requester } from '@comify/common/security';
import createCommentReaction from '^/domain/post/createWithComment';

export default function useCreateComment(postId: string, onCreated: (reactionId: string) => void)
{
    return useCallback(async (comment: string) =>
    {
        const reactionId = await createCommentReaction(requester, { message: comment, parentId: postId });

        onCreated(reactionId);

    }, [postId, onCreated]);
}
