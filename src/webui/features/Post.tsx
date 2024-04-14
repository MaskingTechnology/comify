
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import johnDoe from '../../domain/authentication/johnDoe';
import get from '../../domain/post/get';
import toggleRating from '../../domain/post/toggleRating';
import type PostView from '../../domain/post/view/PostView';
import { Loading } from '../components/module';
import PostPanel from '../components/post/PostPanel';
import { Column, Ruler } from '../designsystem/module';
import awaitData from '../utils/awaitData';
import Reactions from './Reactions';

export default function Feature()
{
    const { postId } = useParams();

    if (postId === undefined) return null;

    const [post, setPost] = useState<PostView | undefined>(undefined);

    const getPost = () => get(johnDoe, postId);

    useEffect(() => awaitData(getPost, setPost), []);

    if (post === undefined)
    {
        return <Loading />;
    }

    const handleFollow = async () =>
    {
        console.log(`Followed clicked`);
    };

    const handleRate = () =>
    {
        if (post === undefined) return Promise.resolve(false);

        return toggleRating(johnDoe, post.id);
    };

    return <Column gap='medium' alignX='stretch'>
        <PostPanel post={post} followHandler={handleFollow} rateHandler={handleRate} />
        <Ruler type='horizontal' />
        <Reactions post={post} />
    </Column>;
}
