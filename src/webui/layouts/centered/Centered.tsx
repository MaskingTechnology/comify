
import React from 'react';

import './Centered.css';

type Props = {
    readonly children?: React.ReactNode;
};

export default function Layout({ children }: Props)
{
    return <main className='ds centered-layout'>
        <div className='container'>
            {children}
        </div>
    </main>;
}
