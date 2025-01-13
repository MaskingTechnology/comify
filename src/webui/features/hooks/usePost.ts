
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { requester } from '^/domain/authentication';
import get from '^/domain/post/getByIdAggregated';

import { useLoadData } from '^/webui/hooks';

export default function usePost()
{
    const { postId } = useParams();

    const getPost = useCallback(async () =>
    {
        return postId !== undefined
            ? get(requester, postId)
            : undefined;
    }, [postId]);

    return useLoadData(getPost, [postId]);
}
