
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { LoadingContainer, RelationProfile } from '^/webui/components';
import { Column, Ruler, Tab, Tabs } from '^/webui/designsystem';

import { usePathParam } from '^/webui/hooks';

import useCreator from './hooks/useCreator';
import useEditProfile from './hooks/useEditProfile';
import useEstablishRelation from './hooks/useEstablishRelation';

import CreatorComics from './CreatorComics';
import CreatorFollowers from './CreatorFollowers';
import CreatorFollowing from './CreatorFollowing';

export default function Feature()
{
    const [tab, setTab] = usePathParam(3, 'comics');

    const establishRelation = useEstablishRelation();
    const editProfile = useEditProfile();

    const [relation] = useCreator();

    const separator = <Ruler direction='horizontal' size='small' />;

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={relation}>
            <RelationProfile
                relation={relation as RelationView}
                onFollowClick={establishRelation}
                onEditClick={editProfile}
            />
            <Tabs selectedId={tab} onChange={setTab} separator={separator}>
                <Tab id='comics' title={`Comics (${relation?.following.postCount})`}>
                    <CreatorComics creator={relation?.following as CreatorView} />
                </Tab>
                <Tab id='followers' title={`Followers (${relation?.following.followerCount})`}>
                    <CreatorFollowers creator={relation?.following as CreatorView} />
                </Tab>
                <Tab id='following' title={`Following (${relation?.following.followingCount})`}>
                    <CreatorFollowing creator={relation?.following as CreatorView} />
                </Tab>
            </Tabs>
        </LoadingContainer>
    </Column >;
}
