
import React from 'react';

import exploreRelations from '../../domain/relation/explore';

import CreatorProfile from '../components/relation/Profile';

const relations = await exploreRelations();
const relation = relations[0];

export default function Feature()
{
    const handleFollow = () =>
    {
        console.log(`Followed ${relation.creator.fullName}`);
    };

    return <CreatorProfile relation={relation} followHandler={handleFollow} />;
}
