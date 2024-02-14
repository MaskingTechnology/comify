
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCreator from '../../domain/creator/getByNickname';
import CreatorView from '../../domain/creator/view/CreatorView.js';
import getRelation from '../../domain/relation/get';
import type RelationView from '../../domain/relation/view/RelationView';
import { Loading, RelationProfile } from '../components/module';
import { useAppContext } from '../contexts/AppContext';
import CreatorContext from '../contexts/CreatorContext';
import { Column, Ruler, Tab, Tabs } from '../designsystem/module';
import awaitData from '../utils/awaitData';
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

    if (relation === undefined)
    {
        return <Loading />;
    }

    const handleFollow = () =>
    {
        console.log(`Followed ${relation.creator.fullName}`);
    };

    const creator = relation.creator;

    return <Column gap='medium' alignX='stretch'>
        <RelationProfile relation={relation} followHandler={handleFollow} />
        <CreatorContext values={{ creator }}>
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
        </CreatorContext>
    </Column>;
}
