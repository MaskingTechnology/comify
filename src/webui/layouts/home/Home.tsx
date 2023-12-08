
import React from 'react';

import './Home.css';

export type HomeProps = {
    mainTop: React.ReactNode;
    mainBottom: React.ReactNode;
    sidebarTop: React.ReactNode;
    sidebarBottom: React.ReactNode;
};

export function Home(props: HomeProps)
{
    return (
        <div className='ds-home'>
            <div className='ds-home ds-home-main'>
                <div className='ds-home ds-home-main ds-home-main-top'>{props.mainTop}</div>
                <div className='ds-home ds-home-main ds-home-main-bottom'>{props.mainBottom}</div>
                <div>Test content</div>
            </div>
            <div className='ds-home ds-home-sidebar'>
                <div className='ds-home ds-home-main ds-home-sidebar-top'>{props.sidebarTop}</div>
                <div className='ds-home ds-home-main ds-home-sidebar-bottom'>{props.sidebarBottom}</div>
            </div>
        </div>
    );
}