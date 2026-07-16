
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { tenant } from '@comify/common/domain/tenant';

import { requester } from '^/domain/authentication';
import getPostsRecommended from '^/domain/post/getRecommended';

export default function usePostsRecommended()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return getPostsRecommended(tenant, requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
