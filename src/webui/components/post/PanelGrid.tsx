
import React from 'react';

import type PostView from '../../../domain/post/PostView';

import { Grid } from '../../designsystem/module';

import SmallPanel from './SmallPanel';

export type Props = {
    posts: PostView[];
};

export default function Component(props: Props)
{
    return <Grid layout='two-columns' gap='medium'>
        {
            props.posts.map(post => <SmallPanel key={post.id} post={post} />)
        }
    </Grid>;
}
