
import React from 'react';

import type PostView from '../../../domain/post/PostView';

import DateFormat from '../../../integrations/dateformat/DateFormat';

import { Column, Panel, Row, Text } from '../../designsystem/module';

import Comic from '../comic/Comic';

import EngagementsRow from './EngagementsRow';

export type Props = {
    post: PostView;
};

export default function Component(props: Props)
{
    const post = props.post;
    const comic = post.comic;

    const respondedText = DateFormat.fromNow(post.createdAt);

    return <Panel>
        <Column gap='small' align='justify'>
            <Comic comic={comic} />
            <Row align='justify'>
                <EngagementsRow post={post} />
                <Text value={respondedText} />
            </Row>
        </Column>
    </Panel>;
}
