
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getTimelinePosts from '^/domain/post/timelineAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useTimelinePosts()
{
    const limit = 6;
    let offset = 0;

    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getInitialPosts = () => getTimelinePosts(requester, { limit, offset });

    useEffect(() => awaitData(getInitialPosts, setPosts), []);

    const getMorePosts = async () =>
    {
        offset += limit;

        const nextPosts = await getTimelinePosts(requester, { limit, offset });

        setPosts(prevPosts => [...(prevPosts ?? []), ...nextPosts]);

        return nextPosts.length < limit;
    };

    return [posts, getMorePosts] as const;
}
