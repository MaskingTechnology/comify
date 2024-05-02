
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type CreatorView from '^/domain/creator/view/CreatorView';
import getCreatorPosts from '^/domain/post/getByCreator';
import type PostView from '^/domain/post/view/PostView';

import { awaitData } from '^/webui/utils';

export default function hook(creator: CreatorView)
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => getCreatorPosts(johnDoe, creator.id);

    useEffect(() => awaitData(getPosts, setPosts), [creator]);

    return [posts, setPosts] as const;
}
