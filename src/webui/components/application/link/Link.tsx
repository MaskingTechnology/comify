
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Link.css';

export type Props = {
    to: string;
    children?: React.ReactNode;
};

export default function Component(props: Props)
{
    const location = useLocation();
    const isActive = location.pathname === props.to;

    return <NavLink className={'application-link' + (isActive ? ' active' : '')} to={props.to}>
        {props.children}
    </NavLink>;
}
