
import React from 'react';

import { Row, IconProps } from '../../designsystem/module';

import CompactNumber from '../compactnumber/CompactNumber';

export type EngagementProps = {
    icon: React.ReactElement<IconProps>;
    number: number;
};

export default function Engagement(props: EngagementProps)
{
    return <Row gap='none'>
        {props.icon}
        <CompactNumber value={props.number} />
    </Row>;
}
