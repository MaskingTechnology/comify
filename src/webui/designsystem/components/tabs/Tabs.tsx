
import React, { useState } from 'react';

import './Tabs.css';

export type TabProps = {
    title: React.ReactNode;
    children: React.ReactNode;
};

export function Tab(props: TabProps)
{
    return (
        <div className='ds-tabs-tab'>{props.children}</div>
    );
}

export type TabsProps = {
    separator?: React.ReactNode;
    children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
};

export function Tabs(props: TabsProps)
{
    const [selected, setSelected] = useState(0);

    const children = Array.isArray(props.children)
        ? props.children
        : [props.children];

    return <>
        <div className='ds-tabs'>
            <div className='ds-tabs-nav'>
                {
                    children.map((element, index) =>
                    {
                        const style = index === selected ? 'active' : 'inactive';
                        const handleClick = () => setSelected(index);

                        return (
                            <div key={index} className={'ds-tabs-nav-item ' + style} onClick={handleClick}>
                                {element.props.title}
                            </div>
                        );
                    })
                }
            </div>
            {
                props.separator !== undefined
                    ? <div className='ds-tabs-separator'>{props.separator}</div>
                    : null
            }
            <div className="ds-tabs-content">{children[selected]}</div>
        </div>
    </>;
}
