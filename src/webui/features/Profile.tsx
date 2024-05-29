
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import type RelationView from '^/domain/relation/view/RelationView';

import { LoadingContainer, RelationProfile } from '^/webui/components';
import { Column, Ruler, Tab, Tabs } from '^/webui/designsystem';
import { useCreator, useEditProfile, useEstablishRelation } from '^/webui/hooks';

import CreatorComics from './CreatorComics';
import CreatorFollowers from './CreatorFollowers';
import CreatorFollowing from './CreatorFollowing';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const editProfile = useEditProfile();

    const [relation] = useCreator();

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={relation}>
            <RelationProfile
                relation={relation as RelationView}
                onFollowClick={establishRelation}
                onEditClick={editProfile}
            />
            <Tabs separator={<Ruler type='horizontal' size='small' />}>
                <Tab title={`Comics (${relation?.following.postCount})`}>
                    <CreatorComics creator={relation?.following as CreatorView} />
                </Tab>
                <Tab title={`Followers (${relation?.following.followerCount})`}>
                    <CreatorFollowers creator={relation?.following as CreatorView} />
                </Tab>
                <Tab title={`Following (${relation?.following.followingCount})`}>
                    <CreatorFollowing creator={relation?.following as CreatorView} />
                </Tab>
            </Tabs>
        </LoadingContainer>
    </Column >;
}
