
import { useEffect, useState } from 'react';

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import explorePosts from '^/domain/post/exploreAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useExplorePosts()
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => explorePosts(requester);

    useEffect(() => awaitData(getPosts, setPosts), []);

    return [posts, setPosts] as const;
}
