
import React, { useState, useEffect } from 'react';

import type RelationView from '../../domain/relation/view/RelationView';
import type PostView from '../../domain/post/view/PostView';
import getTimelinePosts from '../../domain/post/getTimeline';

import { Column } from '../designsystem/module';

import { OrderRow, PostPanelList } from '../components/module';

export default function Feature()
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
        <OrderRow selected='recent' orderChangeHandler={handleOrderChange} />
        <PostPanelList posts={posts} followHandler={handleFollow} rateHandler={handleRate} />
    </Column>;
}
