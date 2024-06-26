
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getPostsFollowing from '^/domain/post/getByFollowingAggregated/feature';

import { awaitData } from '^/webui/utils';

export function usePostsFollowing()
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => getPostsFollowing(requester);

    useEffect(() => awaitData(getPosts, setPosts), []);

    return [posts, setPosts] as const;
}
