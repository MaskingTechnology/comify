
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '^/webui/contexts';

import johnDoe from '^/domain/authentication/johnDoe';
import remove from '^/domain/post/remove';
import type PostView from '^/domain/post/view/PostView';

export function useDeletePost()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return async (post: PostView) =>
    {
        await remove(johnDoe, post.id);

        navigate(`/profile/${identity?.nickname}`);
    };
}
