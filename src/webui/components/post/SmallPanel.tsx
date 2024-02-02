
import React from 'react';

import type PostView from '../../../domain/post/PostView';

import { Column, Panel, Row } from '../../designsystem/module';

import Comic from '../comic/Image';

import TimeElapsed from '../common/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

export type Props = {
    post: PostView;
};

export default function Component({ post }: Props)
{
    return <Panel padding='small'>
        <Column gap='small' alignX='stretch'>
            <Comic comic={post.comic} />
            <Row alignX='justify'>
                <EngagementsRow isRated={post.hasRated} ratingCount={post.ratingCount} reactionCount={post.reactionCount} />
                <TimeElapsed date={post.createdAt} />
            </Row>
        </Column>
    </Panel>;
}
