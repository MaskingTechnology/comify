
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import johnDoe from '../../domain/authentication/johnDoe';
import explorePosts from '../../domain/post/explore';
import toggleRating from '../../domain/post/toggleRating';
import type PostView from '../../domain/post/view/PostView';
import type RelationView from '../../domain/relation/view/RelationView';
import { LoadingContainer, OrderRow, PostPanelList } from '../components/module';
import { Column } from '../designsystem/module';
import awaitData from '../utils/awaitData';

export default function Feature()
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => explorePosts(johnDoe);

    const navigate = useNavigate();

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) =>
    {
        console.log(`Followed ${relation.creator.fullName}`);

        return Promise.resolve();
    };

    const handleRate = (post: PostView) =>
    {
        return toggleRating(johnDoe, post.id);
    };

    const handleDetails = (post: PostView) =>
    {
        navigate(`/post/${post.id}`);
    };

    useEffect(() => awaitData(getPosts, setPosts), []);

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' orderChangeHandler={handleOrderChange} />
        <LoadingContainer data={posts}>
            <PostPanelList
                posts={posts as PostView[]}
                followHandler={handleFollow}
                rateHandler={handleRate}
                detailsHandler={handleDetails}
            />
        </LoadingContainer>
    </Column>;
}
