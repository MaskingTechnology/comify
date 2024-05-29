
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getTimelinePosts from '^/domain/post/timelineAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useTimelinePosts()
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => getTimelinePosts(johnDoe);

    useEffect(() => awaitData(getPosts, setPosts), []);

    return [posts, setPosts] as const;
}
