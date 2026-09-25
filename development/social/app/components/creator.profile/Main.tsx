
import { Column } from '@maskingtech/designsystem';
import { useMemo } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { Tabs, LoadingAndResultContainer } from '~/components/common';
import { Profile } from '~/components/relation';

import useEditProfile from './hooks/useEditProfile';
import useProfile from './hooks/useProfile';

export default function ()
{
    const { nickname } = useParams();
    const [profile, isLoading] = useProfile(nickname);

    const tabItems = useMemo(() => [
        { title: `Comics (${profile?.metrics.posts})`, route: 'comics' },
        { title: `Followers (${profile?.metrics.followers})`, route: 'followers' },
        { title: `Following (${profile?.metrics.following})`, route: 'following' }
    ], [profile]);

    const editProfile = useEditProfile();

    return <Column gap='medium' alignX='stretch'>
        <LoadingAndResultContainer data={profile} isLoading={isLoading}>
            <Profile creatorId={profile?.id} onEdit={editProfile} />
            <Tabs items={tabItems}>
                <Outlet context={{ creatorId: profile?.id }} />
            </Tabs>
        </LoadingAndResultContainer>
    </Column>;
}
