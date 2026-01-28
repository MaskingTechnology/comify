
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

export default function useViewPostDetails()
{
    const navigate = useNavigate();

    return useCallback((post: AggregatedPostData) =>
    {
        navigate(`/posts/${post.id}`);

    }, [navigate]);
}
