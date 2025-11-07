
import type { ReactElement, ReactNode } from 'react';
import { useEffect, useEffectEvent, useMemo, useState } from 'react';

import type { Props as TabProps } from './Tab';
import './Tabs.css';

type Props = {
    readonly separator?: ReactNode;
    readonly selectedId?: string;
    readonly children: ReactElement<TabProps> | ReactElement<TabProps>[];
    readonly onChange?: (newId: string, oldId?: string) => void;
};

export default function Component({ separator, selectedId, children, onChange }: Props)
{
    const [selected, setSelected] = useState<string>(selectedId ?? '');

    const tabList = useMemo(() =>
    {
        return Array.isArray(children) ? children : [children];

    }, [children]);

    const tabMap = useMemo(() =>
    {
        const tabs: Record<string, ReactElement> = {};

        tabList.forEach((element) =>
        {
            const tabId = element.props.id;
            tabs[tabId] = element;
        });

        return tabs;
    }, [tabList]);

    const updateSelected = useEffectEvent((selectedId?: string) =>
    {
        const firstTabId = tabList[0].props.id;

        setSelected(selectedId ?? firstTabId);
    });

    useEffect(() =>
    {
        updateSelected(selectedId);
    }, [selectedId]);

    const handleChange = (tabId: string) =>
    {
        if (onChange !== undefined)
        {
            onChange(tabId, selected);
        }

        setSelected(tabId);
    };

    return <div className='tabs'>
        <div className='nav'>
            {
                tabList.map(element =>
                {
                    const tabId = element.props.id;
                    const key = `tab-${tabId}`;
                    const style = tabId === selected ? 'active' : 'inactive';
                    const handleClick = () => handleChange(element.props.id);

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
        <div className="content">{tabMap[selected]}</div>
    </div>;
}
