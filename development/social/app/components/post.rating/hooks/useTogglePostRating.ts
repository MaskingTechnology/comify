
import { useCallback } from 'react';

import { requester } from '@comify/common/security';

import { type Post } from '^/domain/post';
import toggleRating from '^/domain/post.rating/toggle';

export default function useTogglePostRating()
{
    return useCallback((post: Post) =>
    {
        return toggleRating(requester, post.id);

    }, []);
}
