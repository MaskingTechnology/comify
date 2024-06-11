
import React, { useState } from 'react';
import { Props as TabProps } from './Tab';
import './Tabs.css';

export type Props = {
    readonly separator?: React.ReactNode;
    readonly children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
    readonly onChange?: (oldIndex: number, newIndex: number) => void;
};

export default function Component({ separator, children, onChange }: Props)
{
    const [selected, setSelected] = useState(0);

    const handleChange = (index: number) =>
    {
        if (onChange !== undefined)
        {
            onChange(selected, index);
        }

        setSelected(index);
    };

    const tabs = Array.isArray(children)
        ? children
        : [children];

    return <div className='tabs'>
        <div className='nav'>
            {
                tabs.map((element, index) =>
                {
                    const style = index === selected ? 'active' : 'inactive';
                    const handleClick = () => handleChange(index);
                    const key = `tab-${index}-${element.props.title}`;

                    return (
                        <div key={key} className={'item ' + style} onClick={handleClick}>
                            {element.props.title}
                        </div>
                    );
                })
            }
        </div>
        {
            separator !== undefined
                ? <div className='separator'>{separator}</div>
                : null
        }
        <div className="content">{tabs[selected]}</div>
    </div>;
}
