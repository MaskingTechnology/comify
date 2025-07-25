
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '^/webui/contexts';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import remove from '^/domain/post/remove';
import { tenant } from '^/domain/tenant';

export default function useRemovePost()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return useCallback(async (post: AggregatedPostData) =>
    {
        await remove(tenant, requester, post.id);

        navigate(`/profile/${identity?.nickname}`);

    }, [navigate, identity]);
}
