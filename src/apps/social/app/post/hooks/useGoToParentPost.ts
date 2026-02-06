
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

export default function useGoToParentPost()
{
    const navigate = useNavigate();

    return useCallback((post: AggregatedPostData) =>
    {
        if (post.parentId === undefined)
        {
            return;
        }

        return navigate(`/posts/${post.parentId}`);

    }, [navigate]);
}
