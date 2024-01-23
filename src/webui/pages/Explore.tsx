

import React, { useState, useEffect } from 'react';

import type PostView from '../../domain/post/PostView';
import type RelationView from '../../domain/relation/RelationView';

import explorePosts from '../../domain/post/explore';
import exploreRelations from '../../domain/relation/explore';

import { Tabs, Tab, Ruler } from '../designsystem/module';

import Application from './templates/Application';

import { OrderSelection, PostLargePanelList, RelationPropertiesPanelList } from '../components/module';

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
        console.log(`Followed ${relation.creator.fullName}`);
    };

    useEffect(() => { getPosts(); }, []);

    return <Application>
        <Tabs separator={<Ruler type='horizontal' />} changeHandler={handleTabChange}>
            <Tab title='Comics'>
                <OrderSelection key='comics' selected='popular' changeHandler={handleOrderChange} />
                <PostLargePanelList posts={posts} followHandler={handleFollow} />
            </Tab>
            <Tab title='Relations'>
                <OrderSelection key='creators' selected='popular' changeHandler={handleOrderChange} />
                <RelationPropertiesPanelList relations={relations} followHandler={handleFollow} />
            </Tab>
        </Tabs>
    </Application>;
}
