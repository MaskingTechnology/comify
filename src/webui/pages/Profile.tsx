
import React from 'react';

import exploreRelations from '../../domain/relation/explore';

import { Column, Row, TextBox, Tabs, Tab, Ruler } from '../designsystem/module';

import CreatorJoined from '../components/creator/Joined';

import Application from './templates/Application';

const relations = await exploreRelations();
const creator = relations[0].following;

export default function Page()
{
    const handleTabChange = (oldIndex: number, newIndex: number) =>
    {
        console.log(`Tab changed from ${oldIndex} to ${newIndex}`);

        switch (newIndex)
        {

        }
    };

    return <Application>
        <Column gap='medium' alignX='stretch'>
            <CreatorJoined creator={creator} />
            <Tabs separator={<Ruler type='horizontal' size='small' />} changeHandler={handleTabChange}>
                <Tab title={`Comics (${creator.postCount})`}>
                    Comics
                </Tab>
                <Tab title={`Followers (${creator.followerCount})`}>
                    Followers
                </Tab>
                <Tab title={`Following (${creator.followingCount})`}>
                    Following
                </Tab>
            </Tabs>
        </Column>
    </Application>;
}
