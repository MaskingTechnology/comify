
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Row, Text, Image } from '../../../designsystem/module';

import './Item.css';

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

    return <NavLink className='navigation-item' to={to}>
        <Row gap='medium' alignY='center'>
            <Image source={isActive ? activeIcon : inactiveIcon} width='26px' />
            <Text value={title} type={isActive ? 'primary' : 'secondary'} size='large' weight={isActive ? 'bold' : 'normal'} />
        </Row>
    </NavLink>;
}
