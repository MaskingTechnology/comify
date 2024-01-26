
import React from 'react';

import { Icon, Row } from '../../../designsystem/module';

import CompactNumber from '../../common/CompactNumber';

export type Props = {
    ratingCount: number;
    reactionCount: number;
    rateHandler?: () => void;
};

export default function Element({ ratingCount, reactionCount, rateHandler }: Props)
{
    return <Row gap='medium' alignY='center'>
        <Row gap='small' alignY='center'>
            <Icon type='heart' />
            <CompactNumber value={ratingCount} />
        </Row>
        <Row gap='small' alignY='center'>
            <Icon type='comment' />
            <CompactNumber value={reactionCount} />
        </Row>
    </Row>;
}
