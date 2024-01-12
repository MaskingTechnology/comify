
import React from 'react';

import { Row, Text, ImageProps } from '../designsystem/designsystem.js';

import Link from '../elements/Link.js';

export type NavigationItemProps = {
    icon: React.ReactElement<ImageProps>;
    text: string;
    to: string;
};

export default function NavigationItem(props: NavigationItemProps)
{
    return <Link to={props.to}>
        <Row gap='medium'>
            {props.icon}
            <Text value={props.text} size='large' weight='bold' />
        </Row>
    </Link>;
}
