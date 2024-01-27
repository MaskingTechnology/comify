
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Link.css';

export type Props = {
    to: string;
    children?: React.ReactNode;
};

export default function Component({ to, children }: Props)
{
    const location = useLocation();
    const isActive = location.pathname === to;

    return <NavLink className={'application-link' + (isActive ? ' active' : '')} to={to}>
        {children}
    </NavLink>;
}
