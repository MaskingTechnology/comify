
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '@comify/common/security';
import getFollowing from '^/domain/relation/getFollowing';

export default function useCreatorFollowing(creatorId?: string)
{
    const limit = 12;

    const getData = useCallback(async (page: number) =>
    {
        if (creatorId === undefined)
        {
            return [];
        }

        return getFollowing(requester, creatorId, { limit, offset: page * limit });

    }, [creatorId]);

    return usePagination(getData, limit, [creatorId]);
}
