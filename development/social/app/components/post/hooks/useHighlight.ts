
import { useLoadData } from '@maskingtech/react-toolkit';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { requester } from '@comify/common/security';

import getPost from '^/domain/post/getById';

export default function useReaction()
{
    const { highlightId } = useParams();

    const getData = useCallback(async () =>
    {
        return highlightId !== undefined
            ? getPost(requester, highlightId)
            : undefined;
    }, [highlightId]);

    return useLoadData(getData, [highlightId]);
}
