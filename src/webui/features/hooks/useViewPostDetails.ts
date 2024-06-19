
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

export default function useViewPostDetails()
{
    const navigate = useNavigate();

    return useCallback((post: PostView) =>
    {
        navigate(`/post/${post.id}`);

    }, [navigate]);
}
