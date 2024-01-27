
import React from 'react';

import exploreRelations from '../../domain/relation/explore';

import { Column, Tabs, Tab, Ruler } from '../designsystem/module';

import CreatorProfile from '../features/CreatorProfile';
import CreatorComics from '../features/CreatorComics';
import CreatorFollowers from '../features/CreatorFollowers';
import CreatorFollowing from '../features/CreatorFollowing';
import ApplicationTemplate from './templates/Application';

const relations = await exploreRelations();
const creator = relations[0].creator;

export default function Page()
{
    return <ApplicationTemplate>
        <Column gap='medium' alignX='stretch'>
            <CreatorProfile />
            <Tabs separator={<Ruler type='horizontal' size='small' />}>
                <Tab title={`Comics (${creator.postCount})`}>
                    <CreatorComics />
                </Tab>
                <Tab title={`Followers (${creator.followerCount})`}>
                    <CreatorFollowers />
                </Tab>
                <Tab title={`Following (${creator.followingCount})`}>
                    <CreatorFollowing />
                </Tab>
            </Tabs>
        </Column>
    </ApplicationTemplate>;
}
