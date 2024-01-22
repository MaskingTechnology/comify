
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';
import type Post from '../../../domain/client/views/Post';

import LargePanel from './LargePanel';

export type Props = {
    posts: Post[];
    followHandler: (creator: Creator) => void;
};

export default function Component(props: Props)
{
    const posts = props.posts;
    const followHandler = props.followHandler;

    return posts.map(post => <LargePanel key={post.id} post={post} followHandler={followHandler} />);
}
