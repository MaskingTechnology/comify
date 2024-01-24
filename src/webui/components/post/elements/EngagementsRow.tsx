
import React from 'react';

import type PostView from '../../../../domain/post/PostView';

import { Icon, Row } from '../../../designsystem/module';

import CompactNumber from '../../common/CompactNumber';

export type Props = {
    post: PostView;
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
