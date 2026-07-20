
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '@comify/common/security';
import getPostsFollowing from '^/domain/post/getByFollowing';

export default function usePostsFollowing()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return getPostsFollowing(requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
