
import { usePagination } from '@maskingtech/react-toolkit';
import { useCallback } from 'react';

import { requester } from '@comify/common/security';

import getPostsRecommended from '^/domain/post/getRecommended';

export default function usePostsRecommended()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return getPostsRecommended(requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
