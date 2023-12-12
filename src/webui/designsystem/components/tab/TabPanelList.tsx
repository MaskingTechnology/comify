
import React from 'react';

export type TabPanelListProps = {
    children: React.ReactNode;
};

export default function TabPanelList(props: TabPanelListProps)
{
    return (
        <div className="outlet">
            {props.children}
        </div>
    );
}
