
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import johnDoe from '../../domain/authentication/johnDoe';
import get from '../../domain/post/get';
import toggleRating from '../../domain/post/toggleRating';
import type PostView from '../../domain/post/view/PostView';
import { Loading } from '../components/module';
import PostDetails from '../components/post/PostDetails';
import { Column } from '../designsystem/module';
import awaitData from '../utils/awaitData';

export default function Feature()
{
    const { postId } = useParams();

    if (postId === undefined) return null;

    const [post, setPost] = useState<PostView | undefined>(undefined);

    const getPost = () => get(johnDoe, postId);

    const handleFollow = async () =>
    {
        console.log(`Followed clicked`);
    };

    const handleRate = () =>
    {
        if (post === undefined) return Promise.resolve(false);

        return toggleRating(johnDoe, post.id);
    };

    useEffect(() => awaitData(getPost, setPost), []);

    return <Column>
        {
            post !== undefined
                ? <PostDetails post={post} followHandler={handleFollow} rateHandler={handleRate} />
                : <Loading />
        }
    </Column>;
}
