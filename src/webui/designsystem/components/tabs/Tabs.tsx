
import React, { useState } from 'react';

import './Tabs.css';

export type TabsProps = {
    children: React.ReactElement | React.ReactElement[];
};

function constructNavigation(elements: React.ReactElement[], selected: number, setSelected: (index: number) => void)
{
    return elements.map((element, index) =>
    {
        const handleClick = () =>
        {
            setSelected(index);
        };

        const style = index === selected ? "active" : "inactive";

        return (
            <div
                key={index}
                className={'ds-tab-nav-item ' + style}
                onClick={handleClick}
            >
                {element.props.title}
            </div>
        );
    });
}

export default function Tabs(props: TabsProps)
{
    const [selected, setSelected] = useState(0);

    const children = Array.isArray(props.children)
        ? props.children
        : [props.children];

    return (
        <div className='ds-tab'>
            <div className='ds-tab-nav'>
                {constructNavigation(children, selected, setSelected)}
            </div>
            <div className="ds-tab-content">{children[selected]}</div>
        </div>
    );
}
