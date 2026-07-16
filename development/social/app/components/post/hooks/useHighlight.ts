
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useLoadData } from '@maskingtech/react-toolkit';

import { tenant } from '@comify/common/domain/tenant';

import { requester } from '^/domain/authentication';
import getPost from '^/domain/post/getById';

export default function useReaction()
{
    const { highlightId } = useParams();

    const getData = useCallback(async () =>
    {
        return highlightId !== undefined
            ? getPost(tenant, requester, highlightId)
            : undefined;
    }, [highlightId]);

    return useLoadData(getData, [highlightId]);
}
