
import React from 'react';

import type PostView from '../../../domain/post/PostView';

import DateFormat from '../../../integrations/dateformat/DateFormat';

import { Column, Panel, Row, Text } from '../../designsystem/module';

import Comic from '../comic/Image';

import EngagementsRow from './elements/EngagementRow';

export type Props = {
    post: PostView;
};

export default function Component({ post }: Props)
{
    const createdText = DateFormat.fromNow(post.createdAt);

    return <Panel padding='small'>
        <Column gap='small' alignX='stretch'>
            <Comic comic={post.comic} />
            <Row alignX='justify'>
                <EngagementsRow ratingCount={post.ratingCount} reactionCount={post.reactionCount} />
                <Text value={createdText} />
            </Row>
        </Column>
    </Panel>;
}
