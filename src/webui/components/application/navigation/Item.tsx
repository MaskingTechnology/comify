
import React from 'react';

import { Row, Text, Image } from '../../../designsystem/module';

import Link from '../link/Link';

export type ItemProps = {
    icon: string;
    title: string;
    to: string;
};

export default function Item(props: ItemProps)
{
    return <Link to={props.to}>
        <Row gap='medium'>
            <Image source={props.icon} width='13px' />
            <Text value={props.title} size='large' weight='bold' />
        </Row>
    </Link>;
}
