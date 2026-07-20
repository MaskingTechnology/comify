
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useLoadData } from '@maskingtech/react-toolkit';

import { requester } from '@comify/common/security';
import getPost from '^/domain/post/getById';

export default function usePost()
{
    const { postId } = useParams();

    const getData = useCallback(async () =>
    {
        return postId !== undefined
            ? getPost(requester, postId)
            : undefined;
    }, [postId]);

    return useLoadData(getData, [postId]);
}
