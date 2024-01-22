
import React from 'react';

export type TabProps = {
    title: React.ReactNode;
    children: React.ReactNode;
};

export default function Tab(props: TabProps)
{
    return <div className='ds-tabs-tab'>
        {props.children}
    </div>;
}
