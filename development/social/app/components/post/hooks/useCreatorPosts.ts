
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '@comify/common/security';
import getCreatorPosts from '^/domain/post/getByCreator';

export default function useCreatorPosts(creatorId: string)
{
    const limit = 16;

    const getData = useCallback((page: number) =>
    {
        return getCreatorPosts(requester, creatorId, { limit, offset: page * limit });

    }, [creatorId]);

    return usePagination(getData, limit, [creatorId]);
}
