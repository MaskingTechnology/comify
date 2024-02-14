
import { useEffect, useState } from 'react';
import getCreatorPosts from '../../domain/post/getByCreator';
import type PostView from '../../domain/post/view/PostView';
import { Loading, PostPanelGrid } from '../components/module';
import { useCreatorContext } from '../contexts/CreatorContext';
import { Column } from '../designsystem/module';
import loadData from '../utils/loadData';

export default function Feature()
{
    const { creator } = useCreatorContext();
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    if (creator === undefined) return null;

    const getPosts = () => getCreatorPosts(creator.id);

    useEffect(() => loadData(getPosts, setPosts), [creator]);

    if (posts === undefined)
    {
        return <Loading />;
    }

    return <Column gap='small' alignX='stretch'>
        <PostPanelGrid posts={posts} />
    </Column>;
}
