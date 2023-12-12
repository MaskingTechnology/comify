
import React from "react";

import './Tab.css';

export type TabProps = {
    id: string;
    key?: string;
    title: string;
    activeTab: string;
    setActiveTab: (id: string) => void;
};

export default function Tab(props: TabProps)
{
    const handleClick = () =>
    {
        props.setActiveTab(props.id);
    };

    const className = `ds-tab ${props.activeTab === props.id ? "active" : ""}`;

    return (
        <div onClick={handleClick} className={className}>
            {props.title}
        </div>
    );
}
