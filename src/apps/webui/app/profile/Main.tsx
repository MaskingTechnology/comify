
import { useParams, Outlet } from 'react-router-dom';

import { Column } from '@maskingtech/designsystem';

import { Tabs, LoadingAndResultContainer } from '~/app/common';
import { Profile } from '~/app/relation';

import useProfile from './hooks/useProfile';
import useEditProfile from './hooks/useEditProfile';

const tabItems = [
    { name: 'Comics', route: 'comics' },
    { name: 'Followers', route: 'followers' },
    { name: 'Following', route: 'following' }
];

export default function Feature()
{
    const { nickname } = useParams();
    const [profile, isLoading] = useProfile(nickname);

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
