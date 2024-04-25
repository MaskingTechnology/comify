
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import getCreator from '^/domain/creator/getByNickname';
import CreatorView from '^/domain/creator/view/CreatorView';
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
        return establishRelation(johnDoe, (relation as RelationView).creator.id);
    };

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={relation}>
            <RelationProfile relation={relation as RelationView} followHandler={handleFollow} />
            <CreatorContextProvider values={{ creator: relation?.creator }}>
                <Tabs separator={<Ruler type='horizontal' size='small' />}>
                    <Tab title={`Comics (${relation?.creator.postCount})`}>
                        <CreatorComics />
                    </Tab>
                    <Tab title={`Followers (${relation?.creator.followerCount})`}>
                        <CreatorFollowers />
                    </Tab>
                    <Tab title={`Following (${relation?.creator.followingCount})`}>
                        <CreatorFollowing />
                    </Tab>
                </Tabs>
            </CreatorContextProvider>
        </LoadingContainer>
    </Column >;
}
