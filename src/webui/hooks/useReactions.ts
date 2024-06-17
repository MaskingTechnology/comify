
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import getReactionsByPost from '^/domain/reaction/getByPostAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useReactions(post: PostView)
{
    const limit = 15;
    let offset = 0;

    const [reactions, setReactions] = useState<ReactionView[] | undefined>(undefined);

    useEffect(() =>
    {
        const getInitialReactions = () => getReactionsByPost(requester, post.id, { limit, offset });

        awaitData(getInitialReactions, setReactions);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);

    const getMoreReactions = async () =>
    {
        offset += limit;

        const nextReactions = await getReactionsByPost(requester, post.id, { limit, offset });

        setReactions(prevReactions => [...(prevReactions ?? []), ...nextReactions]);

        return nextReactions.length < limit;
    };

    return [reactions, setReactions, getMoreReactions] as const;
}
