
import React from 'react';

import { Paragraph } from '../designsystem/designsystem.js';

export type ReactionsProps = {
    children?: React.ReactNode;
};

export default function Reactions(props: ReactionsProps)
{
    const reactions = React.Children.map(props.children, (child) =>
    {
        return <>{child}&nbsp;</>;
    });

    return <Paragraph size='medium'>
        {reactions}
    </Paragraph>;
}
