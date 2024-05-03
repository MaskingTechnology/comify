
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type PostView from '^/domain/post/view/PostView';
import getReactionsByPost from '^/domain/reaction/getByPost';
import type ReactionView from '^/domain/reaction/view/ReactionView';

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
