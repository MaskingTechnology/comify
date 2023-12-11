
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
        <div className='home'>
            <div className='home-main'>
                <div className='home-main-top'>{props.mainTop}</div>
                <div className='home-main-bottom'>{props.mainBottom}</div>
            </div>
            <div className='home-sidebar'>
                <div className='home-sidebar-top'>{props.sidebarTop}</div>
                <div className='home-sidebar-bottom'>{props.sidebarBottom}</div>
            </div>
        </div>
    );
}
