
import React from 'react';

import { Column, Icon, Panel, Row, Text, ButtonProps } from '../designsystem/designsystem.js';
import Reactions from './Reactions.js';
import Reaction from '../elements/Rating.js';
import DateFormat from '../../integrations/dateformat/DateFormat.js';
import Comic from '../elements/Comic.js';

export type PostSmall = {
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    source: string;
    likes: number;
    comments: number;
};

export default function ComicThumbnail(props: PostSmall)
{
    const respondedText = DateFormat.fromNow(props.responded);

    return <Panel>
        <Column gap='small' align='justify'>
            <Row>
                <Comic source={props.source} />
            </Row>
            <Row align='justify'>
                <Reactions>
                    <Reaction icon={<Icon type='heart' />} number={props.likes} />
                    <Reaction icon={<Icon type='comment' />} number={props.comments} />
                </Reactions>
                <Text value={respondedText} />
            </Row>
        </Column>
    </Panel>;
}
