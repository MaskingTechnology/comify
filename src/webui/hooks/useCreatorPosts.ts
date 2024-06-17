
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getCreatorPosts from '^/domain/post/getByCreatorAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useCreatorPosts(creator: CreatorView)
{
    const limit = 16;
    let offset = 0;

    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    useEffect(() => 
    {
        const getInitialPosts = () => getCreatorPosts(requester, creator.id, { limit, offset });

        awaitData(getInitialPosts, setPosts);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [creator]);

    const getMorePosts = async () =>
    {
        offset += limit;

        const nextPosts = await getCreatorPosts(requester, creator.id, { limit, offset });

        setPosts(prevPosts => [...(prevPosts ?? []), ...nextPosts]);

        return nextPosts.length < limit;
    };

    return [posts, getMorePosts] as const;
}
