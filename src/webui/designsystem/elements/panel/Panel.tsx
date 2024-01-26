
import React from 'react';

import './Panel.css';

export type PanelProps = {
    type?: 'normal' | 'alert' | 'warning' | 'success' | 'error';
    padding?: 'large' | 'medium' | 'small';
    children?: React.ReactNode;
};

export default function Panel(props: PanelProps)
{
    const type = props.type ?? 'normal';
    const padding = props.padding ?? 'large';

    const className = 'ds-panel'
        + ' ds-panel-' + type
        + ' ds-panel-padding-' + padding;

    return <div className={className}>
        {props.children}
    </div>;
}
