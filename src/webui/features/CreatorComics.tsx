
import { useEffect, useState } from 'react';
import johnDoe from '../../domain/authentication/johnDoe';
import getCreatorPosts from '../../domain/post/getByCreator';
import type PostView from '../../domain/post/view/PostView';
import { Loading, PostPanelGrid } from '../components/module';
import { useCreatorContext } from '../contexts/CreatorContext';
import { Column } from '../designsystem/module';
import awaitData from '../utils/awaitData';

export default function Feature()
{
    const { creator } = useCreatorContext();
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    if (creator === undefined) return null;

    const getPosts = () => getCreatorPosts(johnDoe, creator.id);

    useEffect(() => awaitData(getPosts, setPosts), [creator]);

    if (posts === undefined)
    {
        return <Loading />;
    }

    return <Column gap='small' alignX='stretch'>
        <PostPanelGrid posts={posts} />
    </Column>;
}
