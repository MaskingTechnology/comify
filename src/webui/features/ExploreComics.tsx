

import React, { useState, useEffect } from 'react';

import type PostView from '../../domain/post/view/PostView';
import type RelationView from '../../domain/relation/view/RelationView';
import explorePosts from '../../domain/post/explore';
import johnDoe from '../../domain/authentication/johnDoe';

import { Column } from '../designsystem/module';

import { OrderRow, PostPanelList } from '../components/module';

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

    if (posts === undefined)
    {
        return <>Loading...</>;
    }

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' orderChangeHandler={handleOrderChange} />
        <PostPanelList posts={posts} followHandler={handleFollow} rateHandler={handleRate} />
    </Column>;
}
