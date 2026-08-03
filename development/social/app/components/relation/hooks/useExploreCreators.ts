
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '@comify/common/security';
import exploreRelations from '^/domain/relation/explore';

export default function useExploreCreators()
{
    const limit = 20;

    const getData = useCallback((page: number) =>
    {
        return exploreRelations(requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
