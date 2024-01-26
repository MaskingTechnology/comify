
import React from 'react';

import type PostView from '../../../domain/post/PostView';
import type RelationView from '../../../domain/relation/RelationView';

import { Column } from '../../designsystem/module';

import LargePanel from './LargePanel';

export type Props = {
    posts: PostView[];
    followHandler: (relation: RelationView) => void;
    rateHandler: (post: PostView) => void;
};

export default function Component(props: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            props.posts.map(post =>
                <LargePanel
                    key={post.id}
                    post={post}
                    followHandler={() => props.followHandler(post.creator)}
                    rateHandler={() => props.rateHandler(post)}
                />
            )
        }
    </Column>;
}
