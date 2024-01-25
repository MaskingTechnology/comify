

import React, { useState, useEffect } from 'react';

import type PostView from '../../domain/post/PostView';
import type RelationView from '../../domain/relation/RelationView';

import explorePosts from '../../domain/explore/posts';
import exploreRelations from '../../domain/explore/relations';

import { Tabs, Tab, Ruler } from '../designsystem/module';

import Application from './templates/Application';

import { OrderSelection, PostLargePanelList, RelationPanelList } from '../components/module';

export default function Page()
{
    const [posts, setPosts] = useState<PostView[]>([]);
    const [relations, setRelations] = useState<RelationView[]>([]);

    const getPosts = async () =>
    {
        const posts = await explorePosts();
        setPosts(posts);
    };

    const getRelations = async () =>
    {
        const relations = await exploreRelations();
        setRelations(relations);
    };

    const handleTabChange = (oldIndex: number, newIndex: number) =>
    {
        console.log(`Tab changed from ${oldIndex} to ${newIndex}`);

        switch (newIndex)
        {
            case 0: return getPosts();
            case 1: return getRelations();
        }
    };

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) =>
    {
        console.log(`Followed ${relation.following.fullName}`);
    };

    const handleRate = (post: PostView) =>
    {
        console.log(`Rated ${post.id}`);
    };

    useEffect(() => { getPosts(); }, []);

    return <Application>
        <Tabs separator={<Ruler type='horizontal' size='small' />} changeHandler={handleTabChange}>
            <Tab title='Comics'>
                <OrderSelection key='comics' selected='popular' changeHandler={handleOrderChange} />
                <PostLargePanelList posts={posts} followHandler={handleFollow} rateHandler={handleRate} />
            </Tab>
            <Tab title='Creators'>
                <OrderSelection key='creators' selected='popular' changeHandler={handleOrderChange} />
                <RelationPanelList relations={relations} followHandler={handleFollow} />
            </Tab>
        </Tabs>
    </Application>;
}
