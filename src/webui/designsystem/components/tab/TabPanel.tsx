
import React from "react";

import './TabPanel.css';

export type TabPanelProps = {
    id: string;
    activeTab: string;
    children: React.ReactNode;
};

export default function TabPanel(props: TabPanelProps)
{
    return (
        props.activeTab === props.id
            ? <div className="TabPanel"> {props.children} </div>
            : null
    );
}
