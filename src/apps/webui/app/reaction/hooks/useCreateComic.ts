
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import createComicReaction from '^/domain/post/createWithComic';
import { tenant } from '^/domain/tenant';

export default function useCreateComic(postId: string, onCreated: (reactionId: string) => void)
{
    return useCallback(async (imageData: string) =>
    {
        const reactionId = await createComicReaction(tenant, requester, imageData, postId);

        onCreated(reactionId);

    }, [postId, onCreated]);
}
