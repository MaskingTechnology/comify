
import { useNavigate } from 'react-router-dom';

import type PostView from '^/domain/post/view/PostView';

export function useViewPostDetails()
{
    const navigate = useNavigate();

    return (post: PostView) =>
    {
        navigate(`/post/${post.id}`);
    };
}
