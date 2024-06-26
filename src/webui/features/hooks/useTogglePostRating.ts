
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import toggleRating from '^/domain/post/toggleRating/feature';

export default function useTogglePostRating()
{
    return useCallback((post: PostView) =>
    {
        return toggleRating(requester, post.id);

    }, []);
}
