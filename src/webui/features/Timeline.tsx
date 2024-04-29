
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import getTimelinePosts from '^/domain/post/getTimeline';
import toggleRating from '^/domain/post/toggleRating';
import type PostView from '^/domain/post/view/PostView';
import type RelationView from '^/domain/relation/view/RelationView';
import establishRelation from '../../domain/relation/establish';

import { LoadingContainer, OrderRow, PostPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

export default function Feature()
{
    const navigate = useNavigate();
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => getTimelinePosts(johnDoe);

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) =>
    {
        return establishRelation(johnDoe, relation.following.id);
    };

    const handleRate = (post: PostView) =>
    {
        return toggleRating(johnDoe, post.id);
    };

    const handleDetails = (post: PostView) =>
    {
        navigate(`/post/${post.id}`);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleEdit = (relation: RelationView) => { };

    useEffect(() => awaitData(getPosts, setPosts), []);

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='recent' orderChangeHandler={handleOrderChange} />
        <LoadingContainer data={posts}>
            <PostPanelList
                posts={posts as PostView[]}
                followHandler={handleFollow}
                rateHandler={handleRate}
                detailsHandler={handleDetails}
                editHandler={handleEdit}
            />
        </LoadingContainer>
    </Column>;
}
