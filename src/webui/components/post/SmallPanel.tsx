
import React from 'react';

import { Column, Icon, Panel, Row, Text, ButtonProps } from '../../designsystem/module';

import DateFormat from '../../../integrations/dateformat/DateFormat';

import Engagements from '../common/engagements/Engagements';
import Engagement from '../common/engagements/Engagement';
import Comic from '../comic/Comic';

export type SmallPanelProps = {
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    source: string;
    likes: number;
    comments: number;
};

export default function SmallPanel(props: SmallPanelProps)
{
    const respondedText = DateFormat.fromNow(props.responded);

    return <Panel>
        <Column gap='small' align='justify'>
            <Row>
                <Comic source={props.source} />
            </Row>
            <Row align='justify'>
                <Engagements>
                    <Engagement icon={<Icon type='heart' />} number={props.likes} />
                    <Engagement icon={<Icon type='comment' />} number={props.comments} />
                </Engagements>
                <Text value={respondedText} />
            </Row>
        </Column>
    </Panel>;
}
