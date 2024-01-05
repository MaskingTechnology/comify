
import React from 'react';

import './Entrance.css';
import { Ruler } from '../../designsystem/designsystem.js';

export type EntranceProps = {
    sideHeader: React.ReactNode;
    sideContent: React.ReactNode;
    content: React.ReactNode;
};

export default function Entrance(props: EntranceProps)
{
    return <div className='entrance-container'>
        <div className='entrance-side'>
            <div className='entrance-side-header'>{props.sideHeader}</div>
            <div className='entrance-side-content'>{props.sideContent}</div>
        </div>
        <div><Ruler type='vertical' /></div>
        <main>
            {props.content}
        </main>
    </div>;
}
