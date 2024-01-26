
import React from 'react';

import type PostView from '../../../domain/post/PostView';

import DateFormat from '../../../integrations/dateformat/DateFormat';

import { Column, Panel, Row, Text } from '../../designsystem/module';

import Comic from '../comic/Image';

import EngagementsRow from './elements/EngagementRow';

export type Props = {
    post: PostView;
};

export default function Component(props: Props)
{
    const createdText = DateFormat.fromNow(props.post.createdAt);

    return <Panel padding='small'>
        <Column gap='small' alignX='stretch'>
            <Comic comic={props.post.comic} />
            <Row alignX='justify'>
                <EngagementsRow ratingCount={props.post.ratingCount} reactionCount={props.post.reactionCount} />
                <Text value={createdText} />
            </Row>
        </Column>
    </Panel>;
}
