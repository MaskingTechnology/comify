
import { useCallback } from 'react';

import { requester } from '@comify/common/security';
import createComicReaction from '^/domain/post/createWithComic';

export default function useCreateComic(postId: string, onCreated: (reactionId: string) => void)
{
    return useCallback(async (imageData: string) =>
    {
        const reactionId = await createComicReaction(requester, { comicImageDataUrl: imageData, parentId: postId });

        onCreated(reactionId);

    }, [postId, onCreated]);
}
