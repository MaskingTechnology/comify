
import React from 'react';

import { Row } from '../designsystem/designsystem.js';

export type ReactionsProps = {
    children?: React.ReactNode;
};

export default function Reactions(props: ReactionsProps)
{
    return <Row gap='medium'>
        {props.children}
    </Row>;
}
