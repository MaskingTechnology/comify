
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import toggleRating from '^/domain/rating/toggle';

export default function useTogglePostRating()
{
    return useCallback((post: AggregatedPostData) =>
    {
        return toggleRating(requester, post.id);

    }, []);
}
