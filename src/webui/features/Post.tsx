
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import get from '^/domain/post/get';
import toggleRating from '^/domain/post/toggleRating';
import PostView from '^/domain/post/view/PostView';
import establishRelation from '../../domain/relation/establish';

import { LoadingContainer, PostDetailsPanel } from '^/webui/components/module';
import { Column, Ruler } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

import RelationView from '^/domain/relation/view/RelationView';
import Reactions from './Reactions';

export default function Feature()
{
    const { postId } = useParams();

    if (postId === undefined) return null;

    const [post, setPost] = useState<PostView | undefined>(undefined);

    const getPost = () => get(johnDoe, postId);

    useEffect(() => awaitData(getPost, setPost), []);

    const handleFollow = async () =>
    {
        return establishRelation(johnDoe, (post as PostView).creator.following.id);
    };

    const handleRate = () =>
    {
        if (post === undefined) return Promise.resolve(false);

        return toggleRating(johnDoe, post.id);
    };

    const handleProfile = (relation: RelationView) =>
    {
        console.log(relation.following.fullName);
    };

    const handleEdit = (relation: RelationView) =>
    {
        console.log(`Edit profile of: ${relation.following.fullName}`);
    };

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={post}>
            <PostDetailsPanel
                post={post as PostView}
                followHandler={handleFollow}
                rateHandler={handleRate}
                profileHandler={handleProfile}
                editHandler={handleEdit}
            />
            <Ruler type='horizontal' />
            <Reactions post={post as PostView} />
        </LoadingContainer>
    </Column>;
}
