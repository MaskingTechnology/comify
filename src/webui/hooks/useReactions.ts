
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type PostView from '^/domain/post/view/PostView';
import getReactionsByPost from '^/domain/reaction/getByPost';
import type ReactionView from '^/domain/reaction/view/ReactionView';

import { awaitData } from '^/webui/utils';

export default function hooks(post: PostView)
{
    const [reactions, setReactions] = useState<ReactionView[] | undefined>(undefined);

    const getReactions = () => getReactionsByPost(johnDoe, post.id);

    useEffect(() => awaitData(getReactions, setReactions), [post]);

    return [reactions, setReactions] as const;
}