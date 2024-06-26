
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getPostsAll from '^/domain/post/getAllAggregated/feature';

import { awaitData } from '^/webui/utils';

export function usePostsAll()
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => getPostsAll(requester);

    useEffect(() => awaitData(getPosts, setPosts), []);

    return [posts, setPosts] as const;
}
