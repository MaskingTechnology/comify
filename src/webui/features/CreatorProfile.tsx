
import React from 'react';

import ImageView from '../../domain/image/view/ImageView';
import CreatorView from '../../domain/creator/view/CreatorView';
import RelationView from '../../domain/relation/view/RelationView';
import CreatorProfile from '../components/relation/Profile';

const IMAGE_URL = 'https://masking.tech/images/peter.jpg';

const portrait = new ImageView(IMAGE_URL);
const identity = new CreatorView('0', 'Peter van Vliet', 'petermasking', portrait, new Date(), 0, 0, 0);
const relation = new RelationView('0', identity, undefined);

export default function Feature()
{
    const handleFollow = () =>
    {
        console.log(`Followed ${relation.creator.fullName}`);
    };

    return <CreatorProfile relation={relation} followHandler={handleFollow} />;
}
