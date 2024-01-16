
import React from 'react';

import { NavLink } from 'react-router-dom';

import './Link.css';

export type LinkProps = {
    to: string;
    children?: React.ReactNode;
};

export default function Link(props: LinkProps)
{
    return <NavLink className='com-link' to={props.to}>
        {props.children}
    </NavLink>;
}
