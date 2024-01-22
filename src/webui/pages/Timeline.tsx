
import React, { useState, useEffect } from 'react';

import type Creator from '../../domain/client/views/Creator';
import type Post from '../../domain/client/views/Post';

import getTimelinePosts from '../../domain/client/getTimelinePosts';

import { OrderSelection, PostLargePanelList } from '../components/module';

import Application from './templates/Application';

export default function Timeline()
{
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () =>
    {
        const posts = await getTimelinePosts();
        setPosts(posts);
    };

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (creator: Creator) =>
    {
        console.log(`Followed ${creator.fullName}`);
    };

    useEffect(() => { getPosts(); }, []);

    return <Application>
        <OrderSelection selected='recent' changeHandler={handleOrderChange} />
        <PostLargePanelList posts={posts} followHandler={handleFollow} />
    </Application>;
}
