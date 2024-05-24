
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '^/webui/contexts';

import johnDoe from '^/domain/authentication/johnDoe';
import remove, { Result as PostData } from '^/domain/post/remove/feature';

export function useDeletePost()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return async (post: PostData) =>
    {
        await remove(johnDoe, post.id);

        navigate(`/profile/${identity?.nickname}`);
    };
}
