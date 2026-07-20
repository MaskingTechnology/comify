
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '@comify/common/security';
import getFollowers from '^/domain/relation/getFollowers';

export default function useCreatorFollowers(creatorId?: string)
{
    const limit = 12;

    const getData = useCallback(async (page: number) =>
    {
        if (creatorId === undefined)
        {
            return [];
        }

        return getFollowers(requester, creatorId, { limit, offset: page * limit });

    }, [creatorId]);

    return usePagination(getData, limit, [creatorId]);
}
