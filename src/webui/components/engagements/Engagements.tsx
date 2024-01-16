
import React from 'react';

import { Row } from '../../designsystem/module';

export type EngagementsProps = {
    children?: React.ReactNode;
};

export default function Engagements(props: EngagementsProps)
{
    return <Row gap='medium'>
        {props.children}
    </Row>;
}
