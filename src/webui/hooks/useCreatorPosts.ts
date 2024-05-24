
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type CreatorView from '^/domain/creator/view/CreatorView';
import getCreatorPosts, { Result as PostData } from '^/domain/post/fromCreator/feature';

import { awaitData } from '^/webui/utils';

export function useCreatorPosts(creator: CreatorView)
{
    const [posts, setPosts] = useState<PostData[] | undefined>(undefined);

    useEffect(() => 
    {
        const getPosts = () => getCreatorPosts(johnDoe, creator.id);

        awaitData(getPosts, setPosts);

    }, [creator]);

    return [posts, setPosts] as const;
}
