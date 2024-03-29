
import React from 'react';
import './Centered.css';

export type Props = {
    children?: React.ReactNode;
};

export default function Layout({ children }: Props)
{
    return <main className='ds centered-layout'>
        {children}
    </main>;
}
