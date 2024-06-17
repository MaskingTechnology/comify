
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import explorePosts from '^/domain/post/exploreAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useExplorePosts()
{
    const limit = 6;
    let offset = 0;

    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getInitialPosts = () => explorePosts(requester, { limit, offset });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => awaitData(getInitialPosts, setPosts), []);

    const getMorePosts = async () =>
    {
        offset += limit;

        const nextPosts = await explorePosts(requester, { limit, offset });

        setPosts(prevPosts => [...(prevPosts ?? []), ...nextPosts]);

        return nextPosts.length < limit;
    };

    return [posts, getMorePosts] as const;
}
