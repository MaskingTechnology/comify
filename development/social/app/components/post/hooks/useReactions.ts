
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { tenant } from '@comify/common/domain/tenant';

import { requester } from '^/domain/authentication';
import type { Post } from '^/domain/post';
import getReactionsByPost from '^/domain/post/getByParent';

export default function useReactions(post: Post)
{
    const limit = 15;

    const getData = useCallback((page: number) =>
    {
        return getReactionsByPost(tenant, requester, post.id, { limit, offset: page * limit });

    }, [post]);

    return usePagination(getData, limit, [post]);
}
