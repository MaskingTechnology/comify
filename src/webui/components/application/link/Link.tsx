
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Link.css';

export type LinkProps = {
    to: string;
    children?: React.ReactNode;
};

export default function Link(props: LinkProps)
{
    const location = useLocation();
    const isActive = location.pathname === props.to;

    return <NavLink className={'application-link' + (isActive ? ' active' : '')} to={props.to}>
        {props.children}
    </NavLink>;
}
