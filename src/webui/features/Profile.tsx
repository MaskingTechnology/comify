
import type CreatorView from '^/domain/creator/view/CreatorView';

import { LoadingContainer, RelationProfile } from '^/webui/components/module';
import { Column, Ruler, Tab, Tabs } from '^/webui/designsystem/module';
import { useCreator, useEditProfile, useEstablishRelation } from '^/webui/hooks/module';

import CreatorComics from './CreatorComics';
import CreatorFollowers from './CreatorFollowers';
import CreatorFollowing from './CreatorFollowing';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const editProfile = useEditProfile();

    const [relation] = useCreator();

    if (relation === undefined) return null;

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={relation}>
            <RelationProfile relation={relation} followHandler={establishRelation} editHandler={editProfile} />
            <Tabs separator={<Ruler type='horizontal' size='small' />}>
                <Tab title={`Comics (${relation.following.postCount})`}>
                    <CreatorComics creator={relation?.following as CreatorView} />
                </Tab>
                <Tab title={`Followers (${relation.following.followerCount})`}>
                    <CreatorFollowers creator={relation?.following as CreatorView} />
                </Tab>
                <Tab title={`Following (${relation.following.followingCount})`}>
                    <CreatorFollowing creator={relation?.following as CreatorView} />
                </Tab>
            </Tabs>
        </LoadingContainer>
    </Column >;
}
