
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '^/webui/contexts';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import remove from '^/domain/post/remove/feature';

export function useDeletePost()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return async (post: PostView) =>
    {
        await remove(requester, post.id);

        navigate(`/profile/${identity?.nickname}`);
    };
}
