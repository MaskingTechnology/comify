
import { useEffect, useState } from 'react';
import johnDoe from '../../domain/authentication/johnDoe';
import explorePosts from '../../domain/post/explore';
import type PostView from '../../domain/post/view/PostView';
import type RelationView from '../../domain/relation/view/RelationView';
import { Loading, OrderRow, PostPanelList } from '../components/module';
import { Column } from '../designsystem/module';

export default function Feature()
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = async () =>
    {
        const posts = await explorePosts(johnDoe);

        setPosts(posts);
    };

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) =>
    {
        console.log(`Followed ${relation.creator.fullName}`);
    };

    const handleRate = (post: PostView) =>
    {
        console.log(`Rated ${post.id}`);
    };

    useEffect(() => { getPosts(); }, []);

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' orderChangeHandler={handleOrderChange} />
        {
            posts !== undefined
                ? <PostPanelList posts={posts} followHandler={handleFollow} rateHandler={handleRate} />
                : <Loading />
        }
    </Column>;
}
