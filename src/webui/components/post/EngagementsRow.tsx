
import React from 'react';

import type Post from '../../../domain/client/views/Post';

import { Icon, Row } from '../../designsystem/module';

import CompactNumber from '../common/CompactNumber';

export type Props = {
    post: Post;
};

export default function Component(props: Props)
{
    const post = props.post;

    return <Row gap='medium'>
        <Row gap='none'>
            <Icon type='heart' />
            <CompactNumber value={post.ratingCount} />
        </Row>
        <Row gap='none'>
            <Icon type='comment' />
            <CompactNumber value={post.reactionCount} />
        </Row>
    </Row>;
}
