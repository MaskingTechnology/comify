
import React from 'react';

import Link from './Link.js';
import { Text, Row, Paragraph } from '../designsystem/designsystem.js';
import { ImageProps } from '../designsystem/elements/image/Image.js';

export type NavigationItemProps = {
    icon: React.ReactElement<ImageProps>;
    text: string;
    to: string;
};

export default function NavigationItem(props: NavigationItemProps)
{
    return <Link to={props.to}>
        <Paragraph>
            {props.icon} &nbsp;
            <Text value={props.text} size='large' weight='bold' />
        </Paragraph>
    </Link>;
}
