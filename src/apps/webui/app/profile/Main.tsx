
import { useParams, Outlet } from 'react-router-dom';

import { Column } from '@maskingtech/designsystem';

import { Tabs, ResultContainer } from '~/app/common';
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
        <ResultContainer data={profile} isLoading={isLoading}>
        <LoadingAndResultContainer data={profile} isLoading={isLoading}>
            <Profile creatorId={profile?.id} onEdit={editProfile} />
            <Tabs items={tabItems}>
                <Outlet context={{ creatorId: profile?.id }} />
            </Tabs>
        </ResultContainer>
        </LoadingAndResultContainer>
    </Column>;
}
