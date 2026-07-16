
import { useCallback } from 'react';

import { tenant } from '@comify/common/domain/tenant';

import { requester } from '^/domain/authentication';
import type { Post } from '^/domain/post';
import toggleRating from '^/domain/rating/toggle';

export default function useTogglePostRating()
{
    return useCallback((post: Post) =>
    {
        return toggleRating(tenant, requester, post.id);

    }, []);
}
