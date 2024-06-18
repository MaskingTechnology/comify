
import { useParams } from 'react-router-dom';

import requester from '^/domain/authentication/requester';
import get from '^/domain/post/getByIdAggregated/feature';

import { useLoadData } from '^/webui/utils';

export function usePost()
{
    const { postId } = useParams();

    const getPost = async () =>
    {
        return postId !== undefined
            ? get(requester, postId)
            : undefined;
    };

    return useLoadData(getPost, [postId]);
}
