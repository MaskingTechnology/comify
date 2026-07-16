
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { tenant } from '@comify/common/domain/tenant';

import { requester } from '^/domain/authentication';
import getPostsFollowing from '^/domain/post/getByFollowing';

export default function usePostsFollowing()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return getPostsFollowing(tenant, requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
