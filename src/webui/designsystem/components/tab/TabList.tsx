
import React from "react";

import './TabList.css';

export type TabListProps = {
    children: React.ReactNode;
};

export default function TabList(props: TabListProps)
{
    return (
        <div className="ds-tablist">
            <ul className="ds-tablist-nav">
                {props.children}
            </ul>
        </div >
    );
}

//ul ??
