
import { useEffect, useState } from 'react';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getCreatorPosts from '^/domain/post/getByCreatorAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useCreatorPosts(creator: CreatorView)
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    useEffect(() => 
    {
        const getPosts = () => getCreatorPosts(requester, creator.id);

        awaitData(getPosts, setPosts);

    }, [creator]);

    return [posts, setPosts] as const;
}
