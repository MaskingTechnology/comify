
import React from 'react';

import exploreRelations from '../../domain/relation/explore';

import CreatorJoined from '../components/creator/Joined';

const relations = await exploreRelations();
const creator = relations[0].creator;

export default function Feature()
{
    return <CreatorJoined creator={creator} />;
}
