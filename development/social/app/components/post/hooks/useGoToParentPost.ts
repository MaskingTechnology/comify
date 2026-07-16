
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Post } from '^/domain/post';

export default function useGoToParentPost()
{
    const navigate = useNavigate();

    return useCallback((post: Post) =>
    {
        if (post.parentId === undefined)
        {
            return;
        }

        return navigate(`/posts/${post.parentId}`);

    }, [navigate]);
}
