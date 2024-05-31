
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

export function useViewPostDetails()
{
    const navigate = useNavigate();

    return (post: PostView) =>
    {
        navigate(`/post/${post.id}`);
    };
}
