
import React from 'react';
import { NavLink } from 'react-router-dom';

import './components.css';

export type LinkProps = {
    to: string;
    state?: any;
    children?: React.ReactNode;
};

export default function Link(props: LinkProps)
{
    return <NavLink className='com-link' to={props.to} state={props.state}>
        {props.children}
    </NavLink>;
}
