
import React from 'react';

import './Title.css';

export type TitleProps = {
    size?: 'large' | 'medium' | 'small';
    value: string;
};

export default function Text(props: TitleProps)
{
    const size = props.size ?? 'large';
    const className = 'ds-title ds-title-size-' + size;

    switch (props.size)
    {
        case 'large': return <h1 className={className}> {props.value} </h1>;
        case 'medium': return <h2 className={className}> {props.value} </h2>;
        case 'small': return <h3 className={className}> {props.value} </h3>;
    }
}
