
import React from 'react';

import { Row, Text, ImageProps } from '../../../designsystem/module';

import Link from '../link/Link';

export type ItemProps = {
    icon: React.ReactElement<ImageProps>;
    text: string;
    to: string;
};

export default function Item(props: ItemProps)
{
    return <Link to={props.to}>
        <Row gap='medium'>
            {props.icon}
            <Text value={props.text} size='large' weight='bold' />
        </Row>
    </Link>;
}
