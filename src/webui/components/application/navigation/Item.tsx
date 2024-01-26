
import React from 'react';

import { Row, Text, Image } from '../../../designsystem/module';

import Link from '../link/Link';

export type Props = {
    icon: string;
    title: string;
    to: string;
};

export default function Component({ icon, title, to }: Props)
{
    return <Link to={to}>
        <Row gap='medium' alignY='center'>
            <Image source={icon} width='13px' />
            <Text value={title} size='large' weight='bold' />
        </Row>
    </Link>;
}
