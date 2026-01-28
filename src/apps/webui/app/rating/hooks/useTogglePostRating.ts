
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import toggleRating from '^/domain/rating/toggle';
import { tenant } from '^/domain/tenant';

export default function useTogglePostRating()
{
    return useCallback((post: AggregatedPostData) =>
    {
        return toggleRating(tenant, requester, post.id);

    }, []);
}
