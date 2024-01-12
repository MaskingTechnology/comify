
import React from 'react';

import { Row, Column } from '../designsystem/designsystem.js';

export type FixedDynamicTwoColumnProps = {
    left: React.ReactNode;
    right: React.ReactNode;
};

export default function FixedDynamicTwoColumn(props: FixedDynamicTwoColumnProps)
{
    return <Row>
        {props.left}
        <Column gap='small' align='justify' stretch={true}>
            {props.right}
        </Column>
    </Row>;
}
