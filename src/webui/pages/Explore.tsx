

import React, { useState, useEffect } from 'react';

import type Creator from '../../domain/client/views/Creator';
import type Post from '../../domain/client/views/Post';

import explorePosts from '../../domain/client/explorePosts';
import exploreCreators from '../../domain/client/exploreCreators';

import { Tabs, Tab, Ruler } from '../designsystem/module';

import Application from './templates/Application';

import { OrderSelection, PostLargePanelList, CreatorPropertiesPanelList } from '../components/module';

export default function Explore()
{
    const [posts, setPosts] = useState<Post[]>([]);
    const [creators, setCreators] = useState<Creator[]>([]);

    const getPosts = async () =>
    {
        const posts = await explorePosts();
        setPosts(posts);
    };

    const getCreators = async () =>
    {
        const creators = await exploreCreators();
        setCreators(creators);
    };

    const handleTabChange = (oldIndex: number, newIndex: number) =>
    {
        console.log(`Tab changed from ${oldIndex} to ${newIndex}`);

        switch (newIndex)
        {
            case 0: return getPosts();
            case 1: return getCreators();
        }
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
        <Tabs separator={<Ruler type='horizontal' />} changeHandler={handleTabChange}>
            <Tab title='Comics'>
                <OrderSelection key='comics' selected='popular' changeHandler={handleOrderChange} />
                <PostLargePanelList posts={posts} followHandler={handleFollow} />
            </Tab>
            <Tab title='Creators'>
                <OrderSelection key='creators' selected='popular' changeHandler={handleOrderChange} />
                <CreatorPropertiesPanelList creators={creators} followHandler={handleFollow} />
            </Tab>
        </Tabs>
    </Application>;
}
