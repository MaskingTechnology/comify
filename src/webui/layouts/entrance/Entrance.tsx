
import React from 'react';

import './Entrance.css';
import { Ruler } from '../../designsystem/designsystem.js';

export type EntranceProps = {
    aside: React.ReactNode;
    main: React.ReactNode;
};

export default function Entrance(props: EntranceProps)
{
    return <div className='ds entrance-layout'>
        <aside>
            {props.aside}
        </aside>
        <div><Ruler type='vertical' /></div>
        <main>
            {props.main}
        </main>
    </div>;
}
