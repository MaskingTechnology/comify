
import React from 'react';
import { useLocation } from 'react-router-dom';

import { Row, Text, Image } from '../../../designsystem/module';

import Link from '../link/Link';

export type Props = {
    title: string;
    to: string;
    activeIcon: string;
    inactiveIcon: string;
};

export default function Component({ title, to, activeIcon, inactiveIcon }: Props)
{
    const location = useLocation();
    const isActive = location.pathname === to;

    return <Link to={to}>
        <Row gap='medium' alignY='center'>
            <Image source={isActive ? activeIcon : inactiveIcon} width='25em' />
            <Text value={title} size='large' weight={isActive ? 'bold' : 'normal'} />
        </Row>
    </Link>;
}
