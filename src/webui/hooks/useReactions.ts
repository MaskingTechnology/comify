
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import getReactionsByPost from '^/domain/reaction/getByPostAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useReactions(post: PostView)
{
    const [reactions, setReactions] = useState<ReactionView[] | undefined>(undefined);

    useEffect(() => 
    {
        const getReactions = () => getReactionsByPost(requester, post.id);

        awaitData(getReactions, setReactions);

    }, [post]);

    return [reactions, setReactions] as const;
}
