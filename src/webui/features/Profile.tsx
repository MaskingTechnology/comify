
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import getCreator from '^/domain/creator/getByNickname';
import type CreatorView from '^/domain/creator/view/CreatorView';
import establishRelation from '^/domain/relation/establish';
import getRelation from '^/domain/relation/get';
import type RelationView from '^/domain/relation/view/RelationView';

import { LoadingContainer, RelationProfile } from '^/webui/components/module';
import { CreatorContextProvider, useAppContext } from '^/webui/contexts/module';
import { Column, Ruler, Tab, Tabs } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

import CreatorComics from './CreatorComics';
import CreatorFollowers from './CreatorFollowers';
import CreatorFollowing from './CreatorFollowing';

export default function Feature()
{
    const { identity } = useAppContext();
    const { nickname } = useParams();

    if (identity === undefined || nickname === undefined) return null;

    const [relation, setRelation] = useState<RelationView | undefined>(undefined);

    const getCreatorRelation = () => getCreator(nickname).then((creator: CreatorView) => getRelation(identity.id, creator.id));

    useEffect(() => awaitData(getCreatorRelation, setRelation), [identity, nickname]);

    const handleFollow = async () =>
    {
        return establishRelation(johnDoe, (relation as RelationView).following.id);
    };

    const handleEdit = () =>
    {
        console.log(`Edit profile of: ${relation?.following.fullName}`);
    };

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={relation}>
            <RelationProfile relation={relation as RelationView} followHandler={handleFollow} editHandler={handleEdit} />
            <CreatorContextProvider values={{ creator: relation?.following }} key={relation?.following.id}>
                <Tabs separator={<Ruler type='horizontal' size='small' />}>
                    <Tab title={`Comics (${relation?.following.postCount})`}>
                        <CreatorComics />
                    </Tab>
                    <Tab title={`Followers (${relation?.following.followerCount})`}>
                        <CreatorFollowers />
                    </Tab>
                    <Tab title={`Following (${relation?.following.followingCount})`}>
                        <CreatorFollowing />
                    </Tab>
                </Tabs>
            </CreatorContextProvider>
        </LoadingContainer>
    </Column >;
}
