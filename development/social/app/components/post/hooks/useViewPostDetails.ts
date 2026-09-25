
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { type Post } from '^/domain/post';

export default function useViewPostDetails()
{
    const navigate = useNavigate();

    return useCallback((post: Post) =>
    {
        navigate(`/posts/${post.id}`);

    }, [navigate]);
}
