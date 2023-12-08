
import React from 'react';

import './Tab.css';

import Panel from '../../blocks/panel/Panel.js';

export type TabProps = {
    children: React.ReactNode;
};

export default function Tab(props: TabProps) 
{
    return <div className='ds-tab'>
        <Panel>
            {props.children}
        </Panel>
    </div>;
}
