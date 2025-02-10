
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

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
    const [tab, setTab] = usePathParam('tab', 'comics');

    const establishRelation = useEstablishRelation();
    const editProfile = useEditProfile();

    const [relation] = useCreator();

    const separator = <Ruler direction='horizontal' size='small' />;

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={relation}>
            <RelationProfile
                relation={relation as AggregatedRelationData}
                onFollowClick={establishRelation}
                onEditClick={editProfile}
            />
            <Tabs selectedId={tab} onChange={setTab} separator={separator}>
                <Tab id='comics' title={`Comics (${relation?.following.metrics.posts})`}>
                    <CreatorComics creator={relation?.following as AggregatedCreatorData} />
                </Tab>
                <Tab id='followers' title={`Followers (${relation?.following.metrics.followers})`}>
                    <CreatorFollowers creator={relation?.following as AggregatedCreatorData} />
                </Tab>
                <Tab id='following' title={`Following (${relation?.following.metrics.following})`}>
                    <CreatorFollowing creator={relation?.following as AggregatedCreatorData} />
                </Tab>
            </Tabs>
        </LoadingContainer>
    </Column >;
}
