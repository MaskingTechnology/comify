
import React from 'react';

import './Panel.css';

export type PanelProps = {
    type?: 'normal' | 'alert' | 'warning' | 'success' | 'error';
    children?: React.ReactNode;
};

export default function Panel(props: PanelProps)
{
    const type = props.type ?? 'normal';

    return <div className={'ds-panel ds-panel-' + type}> {props.children} </div>;
}
