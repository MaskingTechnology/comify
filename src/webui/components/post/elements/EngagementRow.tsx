
import React from 'react';

import { Icon, Row } from '../../../designsystem/module';

import CompactNumber from '../../common/CompactNumber';

export type Props = {
    ratingCount: number;
    reactionCount: number;
    rateHandler?: () => void;
};

export default function Element(props: Props)
{
    return <Row gap='medium' alignY='center'>
        <Row gap='small' alignY='center'>
            <Icon type='heart' />
            <CompactNumber value={props.ratingCount} />
        </Row>
        <Row gap='small' alignY='center'>
            <Icon type='comment' />
            <CompactNumber value={props.reactionCount} />
        </Row>
    </Row>;
}
