
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';
import type PostView from '../../../domain/post/PostView';

import { Column } from '../../designsystem/module';

import LargePanel from './LargePanel';

export type Props = {
    posts: PostView[];
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    const posts = props.posts;
    const followHandler = props.followHandler;

    return <Column gap='medium' alignX='stretch'>
        {posts.map(post => <LargePanel key={post.id} post={post} followHandler={followHandler} />)}
    </Column>;
}
