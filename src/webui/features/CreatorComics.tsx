
import { useEffect, useState } from 'react';
import getCreatorPosts from '../../domain/post/getByCreator';
import type PostView from '../../domain/post/view/PostView';
import { PostPanelGrid } from '../components/module';
import { useCreatorContext } from '../contexts/CreatorContext';
import { Column } from '../designsystem/module';

export default function Feature()
{
    const { creator } = useCreatorContext();
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    if (creator === undefined)
    {
        return <>Nope...</>;
    }

    const getPosts = async () =>
    {
        const posts = await getCreatorPosts(creator.id);

        setPosts(posts);
    };

    useEffect(() => { getPosts(); }, []);

    if (posts === undefined)
    {
        return <>Loading...</>;
    }

    return <Column gap='small' alignX='stretch'>
        <PostPanelGrid posts={posts} />
    </Column>;
}
