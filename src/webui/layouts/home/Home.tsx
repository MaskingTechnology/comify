
import React from 'react';

import './Home.css';
import { Ruler } from '../../designsystem/designsystem.js';

export type HomeProps = {
    header: React.ReactNode;
    content: React.ReactNode;
    sideTop: React.ReactNode;
    sideBottom: React.ReactNode;
};

export default function Home(props: HomeProps)
{
    return <div className='home-container'>
        <main className='home-main'>
            <div className='home-header'>{props.header}</div>
            <div className='home-content'>{props.content}</div>
        </main>
        <div><Ruler type='vertical' /></div>
        <div className='home-side'>
            {props.sideTop}
            {props.sideBottom}
        </div>
    </div>;
}
