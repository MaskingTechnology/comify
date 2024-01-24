
import React from 'react';

import type PostView from '../../../domain/post/PostView';

import DateFormat from '../../../integrations/dateformat/DateFormat';

import { Column, Panel, Row, Text } from '../../designsystem/module';

import Comic from '../comic/Image';

import EngagementsRow from './elements/EngagementsRow';

export type Props = {
    post: PostView;
};

export default function Component(props: Props)
{
    const post = props.post;
    const comic = post.comic;

    const respondedText = DateFormat.fromNow(post.createdAt);

    return <Panel>
        <Column gap='small' alignY='justify'>
            <Comic comic={comic} />
            <Row alignX='justify'>
                <EngagementsRow post={post} />
                <Text value={respondedText} />
            </Row>
        </Column>
    </Panel>;
}
