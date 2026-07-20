
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '@comify/common/security';
import explorePosts from '^/domain/post/explore';

export default function useExplorePosts()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return explorePosts(requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
