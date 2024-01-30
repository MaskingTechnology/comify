
import React from 'react';

export type Props = {
    title: React.ReactNode;
    children: React.ReactNode;
};

export default function Component({ children }: Props)
{
    return <div className='ds-tabs-tab'>
        {children}
    </div>;
}
