
import React, { useState } from 'react';

import { TabProps } from './Tab';

import './Tabs.css';

export type TabsProps = {
    separator?: React.ReactNode;
    children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
    changeHandler?: (oldIndex: number, newIndex: number) => void;
};

export default function Tabs(props: TabsProps)
{
    const [selected, setSelected] = useState(0);

    const handleChange = (index: number) =>
    {
        if (props.changeHandler !== undefined)
        {
            props.changeHandler(selected, index);
        }

        setSelected(index);
    };

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
                        const handleClick = () => handleChange(index);

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
