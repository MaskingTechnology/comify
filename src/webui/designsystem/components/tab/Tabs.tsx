
import React, { useState } from 'react';

import './Tabs.css';

import TabPanelList from './TabPanelList.js';
import TabPanel from './TabPanel.js';
import TabList from './TabList.js';
import Tab from './Tab.js';

export type TabsProps = {
    titles: string[];
    children: React.ReactNode;
    idPrefix?: string;
};

export default function Tabs(props: TabsProps)
{
    const idPrefix = props.idPrefix ?? "tab";
    const [activeTab, setActiveTab] = useState(`${idPrefix}1`);

    const tabs = constructTabs(props.titles, idPrefix, activeTab, setActiveTab);
    const tabPanels = constructTabPanels(props.children, idPrefix, activeTab);

    return (
        <div className="ds-tabs">
            <TabList>
                {tabs}
            </TabList>

            <TabPanelList>
                {tabPanels}
            </TabPanelList>
        </div>
    );
}

function constructTabs(tabsTitles: string[], idPrefix: string, activeTab: string, setActiveTab: (id: string) => void): React.ReactNode
{
    return tabsTitles.map((title, index) =>
    {
        return (
            <Tab title={title} key={`${idPrefix}${index + 1}`} id={`${idPrefix}${index + 1}`} activeTab={activeTab} setActiveTab={setActiveTab} />
        );
    });
}

function constructTabPanels(children: React.ReactNode, idPrefix: string, activeTab: string): React.ReactNode
{
    if (Array.isArray(children) === false)
    {
        return null;
    }

    return children.map((child: React.ReactNode, index: number) =>
    {
        return (
            <TabPanel key={`${idPrefix}${index + 1}`} id={`${idPrefix}${index + 1}`} activeTab={activeTab}>
                {child}
            </TabPanel>
        );
    });
}
