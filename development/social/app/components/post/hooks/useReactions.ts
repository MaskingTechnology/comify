
import { usePagination } from '@maskingtech/react-toolkit';
import { useCallback } from 'react';

import { requester } from '@comify/common/security';

import { type Post } from '^/domain/post';
import getReactionsByPost from '^/domain/post/getByParent';

export default function useReactions(post: Post)
{
    const limit = 15;

    const getData = useCallback((page: number) =>
    {
        return getReactionsByPost(requester, post.id, { limit, offset: page * limit });

    }, [post]);

    return usePagination(getData, limit, [post]);
}
