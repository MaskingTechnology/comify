
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import getReactionsByPost from '^/domain/reaction/getByPostAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useReactions(post: PostView)
{
    const [reactions, setReactions] = useState<ReactionView[] | undefined>(undefined);

    useEffect(() => 
    {
        const getReactions = () => getReactionsByPost(johnDoe, post.id);

        awaitData(getReactions, setReactions);

    }, [post]);

    return [reactions, setReactions] as const;
}
