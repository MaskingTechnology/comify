
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import explorePosts from '^/domain/post/explore';
import toggleRating from '^/domain/post/toggleRating';
import type PostView from '^/domain/post/view/PostView';
import establishRelation from '^/domain/relation/establish';
import type RelationView from '^/domain/relation/view/RelationView';

import { LoadingContainer, OrderRow, PostPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

export default function Feature()
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => explorePosts(johnDoe);

    const navigate = useNavigate();

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = async (relation: RelationView) =>
    {
        return establishRelation(johnDoe, relation.following.id);
    };

    const handleRate = (post: PostView) =>
    {
        return toggleRating(johnDoe, post.id);
    };

    const handleProfile = (relation: RelationView) =>
    {
        console.log(relation.following.fullName);
    };

    const handleDetails = (post: PostView) =>
    {
        navigate(`/post/${post.id}`);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleEdit = (relation: RelationView) => { };

    useEffect(() => awaitData(getPosts, setPosts), []);

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' orderChangeHandler={handleOrderChange} />
        <LoadingContainer data={posts}>
            <PostPanelList
                posts={posts as PostView[]}
                followHandler={handleFollow}
                rateHandler={handleRate}
                profileHandler={handleProfile}
                detailsHandler={handleDetails}
                editHandler={handleEdit}
            />
        </LoadingContainer>
    </Column>;
}
