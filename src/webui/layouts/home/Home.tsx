
import React from 'react';

import './Home.css';

export type Props = {
    children?: React.ReactNode;
};

export default function Layout({ children }: Props)
{
    return <main className='ds home-layout'>
        {children}
    </main>;
}
