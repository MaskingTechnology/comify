
import React, { useState, useEffect } from 'react';

import type CreatorView from '../../domain/creator/CreatorView';
import type PostView from '../../domain/post/PostView';

import getTimelinePosts from '../../domain/post/getTimeline';

import { OrderSelection, PostLargePanelList } from '../components/module';

import Application from './templates/Application';

export default function Page()
{
    const [posts, setPosts] = useState<PostView[]>([]);

    const getPosts = async () =>
    {
        const posts = await getTimelinePosts();
        setPosts(posts);
    };

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (creator: CreatorView) =>
    {
        console.log(`Followed ${creator.fullName}`);
    };

    useEffect(() => { getPosts(); }, []);

    return <Application>
        <OrderSelection selected='recent' changeHandler={handleOrderChange} />
        <PostLargePanelList posts={posts} followHandler={handleFollow} />
    </Application>;
}
